import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesFeedComponent } from './articles-feed.component';
import { ArticleSearchFieldModule } from '../article-search-field/article-search-field.module';
import { ArticleListModule } from '../article-list/article-list.module';

@NgModule({
  declarations: [ArticlesFeedComponent],
  imports: [CommonModule, ArticleSearchFieldModule, ArticleListModule],
  exports: [ArticlesFeedComponent]
})
export class ArticlesFeedModule {}
