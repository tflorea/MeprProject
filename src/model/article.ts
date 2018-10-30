import { Topic } from "./topic";

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
}