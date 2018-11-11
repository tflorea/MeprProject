import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesFeedComponent } from './core/search/components/articles-feed/articles-feed.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
