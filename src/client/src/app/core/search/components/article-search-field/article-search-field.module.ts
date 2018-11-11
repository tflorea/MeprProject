import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ArticleSearchFieldComponent } from './article-search-field.component';

@NgModule({
  declarations: [ArticleSearchFieldComponent],
  imports: [CommonModule, MatInputModule],
  exports: [ArticleSearchFieldComponent]
})
export class ArticleSearchFieldModule {}
