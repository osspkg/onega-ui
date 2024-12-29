import {readFileSync} from 'fs';
import {readdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';

function readAllFiles(dir: string, ext: string): string[] {
  const out = new Set<string>();
  const files = readdirSync(dir, {withFileTypes: true, recursive: true});
  files.forEach(file => {
    if (file.isFile() && path.extname(file.name) === ext) {
      out.add(path.join(file.path || dir, file.name));
      return;
    }
    if (file.isDirectory()) {
      readAllFiles(path.join(dir, file.name), ext).forEach(v => out.add(v))
      return;
    }
  });
  return Array.from(out).slice();
}

interface TagProp {
  key: string
  value: string
}

interface Tag {
  name: string
  desc: string
  group: string
  html: string
  code: string
  other: string
  props: TagProp[]
}

function extractTags(data: string): Tag {
  const out: Tag = {name: '', code: '', desc: '', group: '', html: '', other: '', props: []};

  const rexName = /@name(.*?)$/gms;
  const rexGroup = /@group(.*?)$/gms;
  const rexProp = /@prop(.*?):=(.*?)$/gms;
  const rexDesc = /@desc(.*?)[@*]/gms;
  const rexHtml = /@html(.*?)[@*]/gms;
  const rexCode = /@code(.*?)[@*]/gms;
  const rexOther = /@other(.*?)[@*]/gms;

  for (const item of data.matchAll(rexName)) {
    out.name = item[1].trim();
  }
  for (const item of data.matchAll(rexGroup)) {
    out.group = item[1].trim();
  }
  for (const item of data.matchAll(rexDesc)) {
    out.desc = item[1].trim();
  }
  for (const item of data.matchAll(rexHtml)) {
    out.html = item[1].trimEnd();
  }
  for (const item of data.matchAll(rexCode)) {
    out.code = item[1].trimEnd();
  }
  for (const item of data.matchAll(rexOther)) {
    out.other = item[1].trimEnd();
  }
  for (const item of data.matchAll(rexProp)) {
    out.props.push({key: item[1].trim(), value: item[2].trim()});
  }

  return out;
}

function extractComment(file: string): Tag[] {
  const out: Tag[] = [];
  const buf = readFileSync(file).toString();
  const rex = /\/\*(.*?)\*\//sg;
  for (const item of buf.matchAll(rex)) {
    out.push(extractTags(item[0]));
  }
  return out;
}

interface DocTemplate {
  data: string
  class: string
  filename: string
}

function escapeHTML(data: string): string {
  return data
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('{', '&#123;')
    .replaceAll('}', '&#125;');
}

function docTemplate(name: string, mod: string, data: Tag[]): DocTemplate {
  const selector = `${mod.toLowerCase()}-${name.toLowerCase().replaceAll(' ', '-')}`;
  const modName = mod.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join('');
  const className = modName + name.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join('');

  const other: string[] = [];
  let view = '\n';

  data.forEach(tag => {
    other.push(tag.other);
    view += `<h4 class="bq bq-warning demo-name">${tag.name}</h4>\n`;
    view += `<p class="demo-desc">${tag.desc}</p>\n`;
    if (tag.html.length > 0) {
      view += `<div class="demo-view w-full">${tag.html}</div>\n`;
      view += `<pre class="demo-html w-full">${escapeHTML(tag.html)}</pre>\n`;
    }
    if (tag.code.length > 0) {
      view += `<pre class="demo-code w-full">${tag.code}</pre>\n`;
    }
    if (tag.props.length > 0) {
      view += '<table class="demo-attr">\n';
      tag.props.forEach(value => {
        view += `<tr><td class="t-wrap-line" style="width: 30%;"><b>${value.key}</b></td>
<td class="t-wrap-line">${value.value}</td></tr>`;
      });
      view += '</table>\n';
    }
    view += '<div class="demo-end">&nbsp;</div>\n';
  });

  return {
    data: `import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '${selector}',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: \`${view.replaceAll('\`', '\\\`')}\`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ${className} {
  ${other.join('\n').trim()}
}`,
    filename: selector,
    class: className,
  };
}

interface ModuleTemplate {
  title: string
  class: string
  filename: string
}

function moduleTemplate(mod: string, data: ModuleTemplate[]): string {
  const imports: string[] = [];
  const links: string[] = [];
  const declarations: string[] = [];

  const modName = mod.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join('');

  data.forEach(value => {
    imports.push(`import { ${value.class} } from './${value.filename}';`);
    links.push(`{ link: '${value.title}', component: ${value.class} },`);
    declarations.push(`${value.class},`);
  });

  return `import { NgModule } from '@angular/core';
import { CoreModule } from '../../../../../core/src/lib/core.module';
import { KitModule } from '../../../../../kit/src/lib/kit.module';
import { ApiLink } from '../../root/api.models';
${imports.join('\n')}

export function links(): ApiLink[] {
  return [
    ${links.join('\n')}
  ];
}

@NgModule({
  declarations: [
    ${declarations.join('\n')}
  ],
  imports: [
    KitModule,
    CoreModule,
  ],
})
export class ${modName}Module { }
`;
}

function parse(ext: string, mod: string, out: string, dirs: string[]): void {
  const tags: Tag[] = [];
  dirs.forEach(dir =>{
    const files = readAllFiles(dir, ext);
    files.forEach(file => {
      tags.push(...extractComment(file));
    });
  })

  const tmpGroups = new Map<string, string>();
  const groups: string[] = [];
  tags.forEach(value => tmpGroups.set(value.group, value.group));
  for (const group of tmpGroups.keys()) {
    groups.push(group);
  }
  groups.sort();

  const module: ModuleTemplate[] = [];

  groups.forEach(group => {
    const list = tags.filter(value => value.group === group);
    const doc = docTemplate(group, mod, list);
    module.push({filename: doc.filename, class: doc.class, title: group});

    writeFileSync(
      path.join(out, doc.filename + '.ts'),
      doc.data,
      {encoding: 'utf-8'},
    );
  });

  writeFileSync(
    path.join(out, 'module.ts'),
    moduleTemplate(mod, module),
    {encoding: 'utf-8'},
  );
}

parse('.scss', 'style', 'projects/website/src/pages/styles/models',
  ['projects/styles/src/']);
parse('.ts', 'comp', 'projects/website/src/pages/kit/models',
  ['projects/kit/src/lib/', 'projects/core/src/lib/']);
