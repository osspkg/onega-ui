import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[ong-href]',
  standalone: false,
})
export class HrefDirective implements OnInit {
  @Input({ alias: 'ong-href' }) href!: string;

  constructor(
    private ref: ElementRef<HTMLAnchorElement>,
  ) {

  }

  ngOnInit() {
    this.ref.nativeElement.setAttribute('href', this.href.replace(/ /ig, '--'));
  }
}

/*
@name Href Build
@group Links
@prop [ong-href] := Replacing spaces with double dashes
@html
  <a [ong-href]="'/aaa aaa'">HREF BUILD as href="/aaa--aaa"</a>
*/
