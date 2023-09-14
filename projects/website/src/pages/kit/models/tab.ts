import { Component } from '@angular/core';
import { Api } from './_api';

@Component({
  selector: 'app-check-book',
  template: `
    <ong-tabs [tabColor]="'danger'" [tabStyle]="'btn'" [tabDefault]="'Example Tab 2'" (tabSwitch)="console.log($event)">
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

    <ong-tabs [tabColor]="'danger'" [tabStyle]="'line'">
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
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TabBook implements Api {
  link = 'Tabs';
  component = TabBook;
  attributes = {
    'ong-tabs' : 'base tag',
    'ong-tab-name="..."' : 'attribute with tab name',
    '[tabColor]' : 'setup tab color: [light, secondary, warning, danger, success, info, primary, dark]',
    '[tabStyle]' : 'setup tab style: [btn, line]',
    '[tabDefault]' : 'setup default tab',
    '(tabSwitch)' : 'event tab change',
  };

  example = `
<ong-tabs [tabColor]="'danger'" [tabStyle]="'btn'" [tabDefault]="'Example Tab 2'" (tabSwitch)="console.log($event)">
  <ng-template ong-tab-name="Example Tab 1">
    <div>Tab1</div>
  </ng-template>
  <ng-template ong-tab-name="Example Tab 2">
    <div>Tab2</div>
  </ng-template>
</ong-tabs>
  `;

  protected readonly console = console;
}
