import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ong-tags',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  data = '';

  @Input() values: string[] = [];
  @Input() disable = false;
  @Output() valuesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @ViewChild('element', { static: false }) element?: ElementRef;

  onFocus() {
    if (this.disable) {
      return;
    }
    const el = this.element?.nativeElement;
    if (el !== undefined) {
      (el as HTMLInputElement).focus();
    }
  }

  removeElement(i: number): void {
    if (this.disable) {
      return;
    }
    if (this.values.length > 0) {
      this.values = [...this.values.slice(0, i), ...this.values.slice(i + 1)];
      this.valuesChange.emit(this.values);
    }
  }

  onKeyDown(e: KeyboardEvent): void {
    if (this.disable) {
      return;
    }
    switch (e.code) {
      case 'Enter':
      case 'NumpadEnter':
        if (this.data.length > 0) {
          this.values.push(this.data);
          this.data = '';
          this.valuesChange.emit(this.values);
        }
        break;
    }
  }

}
