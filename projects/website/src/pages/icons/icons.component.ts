import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('iconDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;

  showModel(icon: Icon): void {
    this.currentIcon = icon;
    this.dialog.nativeElement.showModal();
  }

  hideModal(): void {
    this.dialog.nativeElement.close();
    this.currentIcon = undefined;
  }
}
