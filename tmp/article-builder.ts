import { ProvEntity } from "./model/prov-entitiy";
import { Article } from "./model/article";
import { Topic } from "./model/topic";

export class ArticleBuilder {
    
    private article: Article;

    constructor(provEntity: ProvEntity) {
    }

    withTitle(title: string): this {
        return this;
    }

    withDescription(description: string): this {
        return this;
    }

    forTopics(topics: Topic[]): this {
        return this;
    }

    build(): Article {
        return this.article;
    }

}