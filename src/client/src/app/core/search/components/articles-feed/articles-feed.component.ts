import { Component, OnInit } from '@angular/core';
import { Article } from '../../services/article/interfaces/article.interface';

@Component({
  selector: 'app-articles-feed',
  templateUrl: './articles-feed.component.html',
  styleUrls: ['./articles-feed.component.scss']
})
export class ArticlesFeedComponent implements OnInit {
  articles: Article[];
  constructor() {}

  ngOnInit() {
    this.articles = [];
  }

  setArticles(articles: Article[]) {
    this.articles = articles;
  }
}
