import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'a[ong-active-route]',
})
export class ActiveRouteDirective implements AfterViewInit {
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

  ngAfterViewInit() {
    const curr = new URL(location.href).pathname.substring(1);
    if (
      this.ref.nativeElement?.href === null ||
      this.ref.nativeElement?.href === undefined ||
      this.ref.nativeElement?.href.length === 0
    ) {
      console.warn('[ong-active-route]: href not found');
      return;
    }
    const link = new URL(this.ref.nativeElement?.href).pathname.substring(1);
    let isActive = curr.startsWith(link);
    if (link.length === 0) {
      isActive = curr.length === 0;
    }
    this.applyClass(isActive);
  }
}

/*
@name Active Route
@group Links
@prop [ong-active-route] := Adding a class if the link matches the current route or starts with it.
@html
  <a href="/" [ong-active-route]="['btn']">HOME</a>
  <a href="/kit" [ong-active-route]="['btn']">KIT</a>
*/
