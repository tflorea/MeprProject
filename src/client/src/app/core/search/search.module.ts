import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesFeedModule } from './components/articles-feed/articles-feed.module';
import { ArticlesFeedComponent } from './components/articles-feed/articles-feed.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ArticlesFeedModule],
  exports: [ArticlesFeedComponent]
})
export class SearchModule {}
