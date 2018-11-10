import { Topic } from "./topic";
import { ProvEntity } from "./prov-entitiy";

export class Article {
    title: string;
    description: string;
    articleType: string; // news, technicle, blog, etc
    dates: {
        datePosted: Date;
        dateFirstPublished: Date;
        dateLastModified: Date;
    }
    author: string;
    contributor: string;
    articleBody: string;
    topics: Topic[];
    provEntity: ProvEntity;
}