import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from './model';

@Pipe({
  name: 'textFilter',
})
export class TextFilterPipe implements PipeTransform {

  transform(value: Icon[], text: string): Icon[] {
    return value.filter(value1 => value1.icon.indexOf(text) > -1);
  }

}
