export * from './types';
export * from './input.component';
export * from './input.module';

/*
@name Input
@group Input
@prop ong-input := Base tag
@prop [data] := Content
@prop [label] := Field Name
@prop [placeholder] := Content placeholder
@prop [color] := Color ['light' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark'].
@prop [type] := Type ['text' | 'multitext' | 'select' | 'file'].
@prop [style] := Style ['filled' | 'standard'].
@prop [multiline] := Multiline input [false | true].
@prop (onInput) := Event.
@other
  onInput($e: any): void {
    console.log($e);
  }
@html
  <div class="d-flex d-flex-wrap gap-3">
      <ong-input
        [label]="'Input type - filled'"
        [data]="'Input text'"
        [placeholder]="'Input text'"
        [color]="'danger'"
        [type]="'text'"
        [style]="'filled'"
        (onInput)="onInput"
      />
      <ong-input
        [label]="'Input type - standard'"
        [data]="'Input text'"
        [color]="'warning'"
        [type]="'text'"
        [style]="'standard'"
        (onInput)="onInput"
      />
  </div>
 */
