import { User } from "./model/user";
import { Article } from "./model/article";

export class ArticleIterator {

    private currentArticleIndex: number;
    private latestArticles: Article[];

    constructor(private user: User){
    }

    nextArticle(): Article {
        return null;    
    }
    previousArticle(): Article {
        return null;
    }
}