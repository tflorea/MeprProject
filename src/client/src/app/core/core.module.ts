import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { ArticlesFeedComponent } from './search/components/articles-feed/articles-feed.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SearchModule],
  exports: [ArticlesFeedComponent]
})
export class CoreModule {}
