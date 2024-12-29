import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[ong-menuv-header]',
  standalone: false,
})
export class MenuvHeaderDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}

@Directive({
  selector: 'ng-template[ong-menuv-body]',
  standalone: false,
})
export class MenuvBodyDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}

@Directive({
  selector: 'ng-template[ong-menuv-footer]',
  standalone: false,
})
export class MenuvFooterDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}
