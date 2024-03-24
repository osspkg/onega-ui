export * from './tab.component';
export * from './tab.directive';
export * from './tab.module';

/*
@name Tab
@group Tab
@prop ong-tabs := Base tag
@prop ong-tab-name="..." := ng-template directive with tab name
@prop [color] := Tab color ['light' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark'].
@prop [style] := Sticker type ['btn' | 'line'].
@prop [byDefault] := Setter default tab.
@prop (onSwitch) := Event tab switch.
@other
  tabSwitch(value: unknown): void {
    console.table({value});
  }
@html
  <ong-tabs [color]="'danger'" [style]="'btn'" [byDefault]="'Example Tab 2'" (onSwitch)="tabSwitch($event)">
      <ng-template ong-tab-name="Example Tab 1">
        <div>Tab1</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 2">
        <div>Tab2</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 3">
        <div>Tab3</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 4">
        <div>Tab4</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 5">
        <div>Tab5</div>
      </ng-template>
    </ong-tabs>

    <ong-tabs [color]="'danger'" [style]="'line'">
      <ng-template ong-tab-name="Example Tab 1">
        <div>Tab1</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 2">
        <div>Tab2</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 3">
        <div>Tab3</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 4">
        <div>Tab4</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 5">
        <div>Tab5</div>
      </ng-template>
    </ong-tabs>
 */
