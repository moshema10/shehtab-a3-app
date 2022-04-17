import { HtmlParser } from '@angular/compiler';
import {Comment} from './Comment';

export class BlogPost{
    _id: String;
    title: string;
    postDate: string;
    featuredImage: string;
    post: string;
    postedBy: string;
    comments: Array<Comment>;
    category: string;
    tags: Array<string>;
    isPrivate: boolean;
    views: number;

}