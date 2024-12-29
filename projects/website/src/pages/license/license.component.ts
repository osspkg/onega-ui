import { Component } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss'],
  standalone: true,
})
export class LicenseComponent {
  currYear = new Date().getFullYear();
}
