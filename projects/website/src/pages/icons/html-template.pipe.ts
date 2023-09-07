import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlTemplate',
})
export class HtmlTemplatePipe implements PipeTransform {

  transform(value: string): string {
    return `<i class="${value}"></i>`;
  }

}
