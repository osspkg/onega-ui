import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  moduleText = `
import { CoreModule } from '@onega-ui/core';

@NgModule({
  ...
  imports: [
    ...
    CoreModule,
  ],
...
})
  `;

  customVar = `
:root {
  --ong-color-secondary-bg: #e2e2e2;
  --ong-color-secondary-line: #d5d5d5;
  --ong-color-secondary-text: #000000;
  --ong-color-warning-bg: #fff53b;
  --ong-color-warning-line: #fff422;
  --ong-color-warning-text: #000000;
  --ong-color-danger-bg: #fd1f1f;
  --ong-color-danger-line: #fd0606;
  --ong-color-danger-text: #000000;
  --ong-color-success-bg: #25fa96;
  --ong-color-success-line: #0cf98a;
  --ong-color-success-text: #000000;
  --ong-color-info-bg: #4ea2fa;
  --ong-color-info-line: #3595f9;
  --ong-color-info-text: #FFFFFF;
  --ong-color-primary-bg: #0054f3;
  --ong-color-primary-line: #004bda;
  --ong-color-primary-text: #FFFFFF;
  --ong-color-dark-bg: #000000;
  --ong-color-dark-line: black;
  --ong-color-dark-text: #FFFFFF;
}
  `;

}
