import { Pipe, PipeTransform } from '@angular/core';

export class Slice {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

@Pipe({
  name: 'map2Slice',
  standalone: true,
})
export class Map2SlicePipe implements PipeTransform {

  transform(value: { [title: string]: string }): Slice[] {
    const result: Slice[] = [];

    Object.keys(value).forEach((key: string) => {
      result.push(new Slice(key, value[key]));
    });
    return result;
  }

}
