import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[ong-href]',
})
export class HrefDirective implements OnInit {
  @Input({ alias: 'ong-href' }) href!: string;
  constructor(
    private ref: ElementRef<HTMLAnchorElement>,
  ) {

  }

  ngOnInit() {
    this.ref.nativeElement.href = this.href.replace(/ /ig, '--');
  }
}
