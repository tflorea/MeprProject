import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../services/article/interfaces/article.interface';

@Component({
  selector: 'app-article-search-field',
  templateUrl: './article-search-field.component.html',
  styleUrls: ['./article-search-field.component.scss']
})
export class ArticleSearchFieldComponent implements OnInit, OnDestroy {
  @Output()
  searchValueChange: EventEmitter<Article[]> = new EventEmitter<Article[]>();
  articlesSubscription: Subscription;

  searchTerms: Subject<string> = new Subject<string>();
  articles: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.searchTerms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(this.searchArticles),
      catchError(error => {
        console.log(`Error in component ... ${error}`);
        return of<Article[]>([]);
      })
    );

    this.articlesSubscription = this.articles.subscribe(
      (articles: Article[]) => {
        this.searchValueChange.emit(articles);
      }
    );
  }

  search(searchValue: string) {
    this.searchTerms.next(searchValue);
  }

  searchArticles = (term: string): Observable<Article[]> => {
    if (term) {
      return this.articleService.getArticles({
        searchValue: term
      });
    } else {
      return of<Article[]>([]);
    }
  }

  ngOnDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }
}
