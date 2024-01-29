import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[ong-menuv-header]',
})
export class MenuvHeaderDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}

@Directive({
  selector: 'ng-template[ong-menuv-body]',
})
export class MenuvBodyDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}

@Directive({
  selector: 'ng-template[ong-menuv-footer]',
})
export class MenuvFooterDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}
