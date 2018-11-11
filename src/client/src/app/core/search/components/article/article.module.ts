import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ArticleComponent } from './article.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [ArticleComponent]
})
export class ArticleModule {}
