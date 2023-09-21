import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  selector: 'app-tab-book',
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
  attributes: KeyValue[] = [
    { key: 'ong-tabs', value: 'base tag' },
    { key: 'ong-tab-name="..."', value: 'attribute with tab name' },
    { key: '[tabColor]', value: 'setup tab color: [light, secondary, warning, danger, success, info, primary, dark]' },
    { key: '[tabStyle]', value: 'setup tab style: [btn, line]' },
    { key: '[tabDefault]', value: 'setup default tab' },
    { key: '(tabSwitch)', value: 'event tab change' },
  ];

  exampleHTML = `
<ong-tabs [tabColor]="'danger'" [tabStyle]="'btn'" [tabDefault]="'Example Tab 2'" (tabSwitch)="callback($event)">
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
