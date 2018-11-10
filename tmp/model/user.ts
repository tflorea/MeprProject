import { Topic } from "./topic";

export class User {
    id: string;
    username: string;
    email: string;
    password: string;
    favoriteTopics: Topic[];
}