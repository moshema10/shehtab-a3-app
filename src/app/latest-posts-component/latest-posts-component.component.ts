import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-latest-posts-component',
  templateUrl: './latest-posts-component.component.html',
  styleUrls: ['./latest-posts-component.component.css']
})
export class LatestPostsComponentComponent implements OnInit {
  
  @Input() public posts: Array<BlogPost>;

  constructor() { }

  ngOnInit(): void {
  }

}
