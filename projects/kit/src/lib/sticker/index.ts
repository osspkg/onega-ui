export * from './types';
export * from './sticker.component';
export * from './sticker.module';

/*
@name Sticker
@group Sticker
@prop ong-sticker := Base tag
@prop [data] := Sticker text
@prop [color] := Sticker color ['light' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark'].
@prop [type] := Sticker type ['corner' | 'top'].
@prop (onClick) := Click event.
@other
  stickerClick(): void {
    alert('Sticker clicked');
  }
@html
  <div class="d-flex d-flex-wrap gap-3">
    <div class="box box-secondary w-15rem h-10rem p-0 m-0">
      <ong-sticker
        [data]="'Short sticker text.'"
        [color]="'warning'"
        [type]="'corner'"
        (onClick)="stickerClick()"
      />
    </div>
    <div class="box box-secondary w-15rem h-5rem p-0 m-0">
      <ong-sticker
        [data]="'Long sticker text. (Autosize)'"
        [color]="'danger'"
        [type]="'top'"
        (onClick)="stickerClick()"
      />
    </div>
    <div class="box box-secondary w-15rem h-5rem p-0 m-0">
      <ong-sticker
        [data]="'Long sticker text. (Autosize)'"
        [color]="'success'"
        [type]="'left'"
        (onClick)="stickerClick()"
      />
    </div>
  </div>
 */
