import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TColor } from '../envs';
import { TInput, TStyle } from './types';

@Component({
  selector: 'ong-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: false,
})
export class InputComponent {
  @Input() color: TColor = 'light';
  @Input() type: TInput = 'text';
  @Input() style: TStyle = 'standard';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() data = '';
  @Input() multiline = false;

  @Output() onInput: EventEmitter<string> = new EventEmitter<string>();

  emitClick(): void {
    this.onInput.emit(this.data);
  }
}
