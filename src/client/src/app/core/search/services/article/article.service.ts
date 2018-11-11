import { Injectable } from '@angular/core';
import { Article } from './interfaces/article.interface';
import { ArticleFilterStrategy } from './interfaces/article-filter-strategy.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles = [
    {
      id: '1',
      title: 'Article Title',
      author: 'Jon',
      description: `Lorem ipsum dolor sit amet, pertinax maiestatis ius no.
      Est malis viderer ut, cu sonet ocurreret maiestatis eum. Ne nec simul elaboraret.
      Eu his copiosae similique vituperatoribus. Mel ne augue nostro lobortis, ut nec numquam euripidis.
      Ea mei omittam appellantur, ferri adhuc debet no vis.`
    },
    {
      id: '1',
      title: 'Article Title',
      author: 'Jon',
      description: `Lorem ipsum dolor sit amet, pertinax maiestatis ius no.
      Est malis viderer ut, cu sonet ocurreret maiestatis eum. Ne nec simul elaboraret.
      Eu his copiosae similique vituperatoribus. Mel ne augue nostro lobortis, ut nec numquam euripidis.
      Ea mei omittam appellantur, ferri adhuc debet no vis.`
    },
    {
      id: '1',
      title: 'Article Title',
      author: 'Jon',
      description: `Lorem ipsum dolor sit amet, pertinax maiestatis ius no.
      Est malis viderer ut, cu sonet ocurreret maiestatis eum. Ne nec simul elaboraret.
      Eu his copiosae similique vituperatoribus. Mel ne augue nostro lobortis, ut nec numquam euripidis.
      Ea mei omittam appellantur, ferri adhuc debet no vis.`
    },
    {
      id: '1',
      title: 'Article Title',
      author: 'Jon',
      description: `Lorem ipsum dolor sit amet, pertinax maiestatis ius no.
      Est malis viderer ut, cu sonet ocurreret maiestatis eum. Ne nec simul elaboraret.
      Eu his copiosae similique vituperatoribus. Mel ne augue nostro lobortis, ut nec numquam euripidis.
      Ea mei omittam appellantur, ferri adhuc debet no vis.`
    },
    {
      id: '1',
      title: 'Article Title',
      author: 'Jon',
      description: `Lorem ipsum dolor sit amet, pertinax maiestatis ius no.
      Est malis viderer ut, cu sonet ocurreret maiestatis eum. Ne nec simul elaboraret.
      Eu his copiosae similique vituperatoribus. Mel ne augue nostro lobortis, ut nec numquam euripidis.
      Ea mei omittam appellantur, ferri adhuc debet no vis.`
    }
  ];

  constructor() {}

  getArticles(filterStrategy: ArticleFilterStrategy): Observable<Article[]> {
    return of<Article[]>(this.articles);
  }
}
