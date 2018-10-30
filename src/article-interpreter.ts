import { Article } from "./model/article";
import { Topic } from "./model/topic";

export class ArticleInterpreter {

    evaluate(article: Article): ArticleContext {
        return null;
    }
}

export class ArticleContext {
    type: string;
    topics: Topic[];
    references: string[];
}