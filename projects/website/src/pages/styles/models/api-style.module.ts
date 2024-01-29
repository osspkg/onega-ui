import { NgModule } from '@angular/core';
import { AreaBook } from './area';
import { ArticleBook } from './article';
import { BlockquotesBook } from './blockquotes';
import { BoxBook } from './box';
import { ButtonBook } from './button';
import { ContentInputBook } from './content-input';
import { DialogBook } from './dialog';
import { FixGridBook } from './fix-grid';
import { FlexGridBook } from './flex-grid';
import { HeadingBook } from './heading';
import { IndentationBook } from './indentation';
import { TableBook } from './table';
import { TextAlignBook } from './text-align';
import { TextColorBook } from './text-color';

@NgModule({
  declarations: [
    ArticleBook,
    BlockquotesBook,
    BoxBook,
    ButtonBook,
    ContentInputBook,
    DialogBook,
    FixGridBook,
    FlexGridBook,
    HeadingBook,
    TableBook,
    TextAlignBook,
    TextColorBook,
    AreaBook,
    IndentationBook,
  ],
  imports: [
  ],
})
export class ApiKitModule { }
