import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchFieldComponent } from './article-search-field.component';

describe('ArticleSearchFieldComponent', () => {
  let component: ArticleSearchFieldComponent;
  let fixture: ComponentFixture<ArticleSearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleSearchFieldComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
