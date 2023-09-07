import { Component } from '@angular/core';
import { Icons } from '@onega-ui/icons/icons';
import { Icon } from './model';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  search = '';
  icons: Icon[] = Icons;

  currentIcon?: Icon;

  showModel(icon: Icon): void {
    this.currentIcon = icon;
  }

  hideModal(): void {
    this.currentIcon = undefined;
  }
}
