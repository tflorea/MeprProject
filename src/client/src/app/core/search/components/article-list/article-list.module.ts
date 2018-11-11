import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { ArticleModule } from '../article/article.module';

@NgModule({
  declarations: [ArticleListComponent],
  imports: [CommonModule, ArticleModule],
  exports: [ArticleListComponent]
})
export class ArticleListModule {}
