import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '../../../core/src/lib/core.module';
import { KitModule } from '../../../kit/src/lib/kit.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CoreModule, KitModule, RouterOutlet],
})
export class AppComponent {
  currYear = new Date().getFullYear();
}
