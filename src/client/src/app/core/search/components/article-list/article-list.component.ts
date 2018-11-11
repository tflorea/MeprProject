import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../services/article/interfaces/article.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[] = [];
  constructor() {}

  ngOnInit() {}
}
