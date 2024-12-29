import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlTemplate',
  standalone: true,
})
export class HtmlTemplatePipe implements PipeTransform {

  transform(value: string): string {
    return `<i class="${value}"></i>`;
  }

}
