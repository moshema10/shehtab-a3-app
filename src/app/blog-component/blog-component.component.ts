import { Component, OnInit } from '@angular/core';
import BlogData from '../blogData.json';
import { BlogPost } from '../BlogPost';


@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {

  public AllblogPosts: any | Array<BlogPost> = BlogData;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
