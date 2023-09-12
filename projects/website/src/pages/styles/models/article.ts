import { Api } from './_api';

export class ArticleBook implements Api {
  link = 'Article';
  attributes = {
    '.article' : 'base class',
    '.article-x2...6' : 'columns count 2-6 class',
    '.letter-x2...5' : 'first letter size 2-5 class',
  };

  example = `
<div class="article article-x3">
  <h3>header3 header3 header3 header3</h3>
  <p class="letter-x2">Text text text</p>
</div>
  `;

  demo = `
<div class="article article-x3">
<h3>header3 header3 header3 header3</h3>
<p class="letter-x2">Text text text text text text text text text text text text text text text text text text text text text </p>
<p class="letter-x3">text text text text text text text text text text text text text text text text text text text text text </p>
<p class="letter-x4">text text text text text text text text text text text text text text text text text text text text text </p>
<p class="letter-x5">text text text text text text text text text text text text text text text text text text text text text </p>
<h4>header4 header4 header4 header4</h4>
<p>text text text text text text text text text text text text text text text text text text text text text </p>
<p>text text text text text text text text text text text text text text text text text text text text text </p>
<p>text text text text text text text text text text text text text text text text text text text text text </p>
<p>text text text text text text text text text text text text text text text text text text text text text </p>
<p>text text text text text text text text text text text text text text text text text text text text text </p>
<p>text text text text text text text text text text text text text text text text text text text text text </p>
</div>
  `;
}
