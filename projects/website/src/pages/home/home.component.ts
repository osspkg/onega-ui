import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  moduleText = `
import { CoreModule } from '@onega-ui/core';
import { KitModule } from '@onega-ui/kit';

@NgModule({
  ...
  imports: [
    ...
    CoreModule,
    KitModule,
  ],
...
})
  `;

  customVar = `
:root {
  --ong-color-light-bg: #FFFFFF;
  --ong-color-light-text: #000000;

  --ong-color-secondary-bg: #e2e2e2;
  --ong-color-secondary-text: #000000;

  --ong-color-warning-bg: #F2C46D;
  --ong-color-warning-text: #000000;

  --ong-color-danger-bg: #BF8275;
  --ong-color-danger-text: #FFFFFF;

  --ong-color-success-bg: #46592A;
  --ong-color-success-text: #FFFFFF;

  --ong-color-info-bg: #6997BF;
  --ong-color-info-text: #FFFFFF;

  --ong-color-primary-bg: #0367A6;
  --ong-color-primary-text: #FFFFFF;

  --ong-color-dark-bg: #000000;
  --ong-color-dark-text: #FFFFFF;

  --ong-base-size: 1rem;
  --ong-radius-size: .75rem;
  --ong-line-size: 1px;
  --ong-opacity: .55;

  --ong-margin-x-size: calc(var(--ong-base-size) * .75);
  --ong-margin-y-size: calc(var(--ong-base-size) * .5);
  --ong-padding-x-size: calc(var(--ong-base-size) * .75);
  --ong-padding-y-size: calc(var(--ong-base-size) * .5);

  --ong-font-family-sans-serif: -apple-system, Ubuntu, Roboto, Arial, sans-serif;
  --ong-font-family-monospace: "Ubuntu Mono", Consolas, "Courier New", monospace;
  --ong-font-weight: bolder;
  --ong-line-height: 1.2;
  --ong-font-size: var(--ong-base-size);
}
  `;

}
