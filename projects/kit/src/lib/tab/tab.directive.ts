import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[ong-tab-name]',
})
export class TabDirective {
  @Input({ alias: 'ong-tab-name' }) tab!: string;
  constructor(public template: TemplateRef<unknown>) {
  }
}
