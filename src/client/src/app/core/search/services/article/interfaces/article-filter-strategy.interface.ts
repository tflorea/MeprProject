export interface ArticleFilterStrategy {
  searchValue: string;
  cache?: {
    articlesId: string[];
  };
}
