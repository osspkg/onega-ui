import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[ong-active-route]',
})
export class ActiveRouteDirective implements OnInit {
  @Input({ alias: 'ong-active-route' }) classes!: string | string[];

  constructor(
    private ref: ElementRef<HTMLAnchorElement>,
  ) {
  }

  private applyClass(isActive: boolean): void {
    let classList: string[] = [];
    if (this.classes instanceof Array) {
      classList = this.classes;
    } else {
      classList = this.classes.split(/\s+/ig).filter(v => v.length > 0);
    }
    if (isActive) {
      this.ref.nativeElement.classList.add(...classList);
    } else {
      this.ref.nativeElement.classList.remove(...classList);
    }
  }

  ngOnInit() {
    const curr = new URL(location.href).pathname.substring(1);
    const link = new URL(this.ref.nativeElement.href).pathname.substring(1);
    let isActive = curr.startsWith(link);
    if (link.length === 0) {
      isActive = curr.length === 0;
    }
    this.applyClass(isActive);
  }
}
