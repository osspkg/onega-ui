import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TColor } from '../envs';
import { TSticker } from './types';

@Component({
  selector: 'ong-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
  standalone: false,
})
export class StickerComponent {

  @Input() color: TColor = 'light';
  @Input() type: TSticker = 'corner';
  @Input() data = '';

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  emitClick(): void {
    this.onClick.emit(this.data);
  }
}
