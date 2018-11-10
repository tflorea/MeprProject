import { Article } from "./model/article";

export class ArticlePool {

    private articles: Article[]

    acquire(id: string): Article {
        return null;
    }

    release(article: Article): void {
        
    }
}