import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icons } from '@onega-ui/icons/icons';
import { HtmlTemplatePipe } from './html-template.pipe';
import { Icon } from './model';
import { TextFilterPipe } from './text-filter.pipe';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  standalone: true,
  imports: [CommonModule, HtmlTemplatePipe, TextFilterPipe, FormsModule],
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
