import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
@Component({
  selector: 'app-post-data-component',
  templateUrl: './post-data-component.component.html',
  styleUrls: ['./post-data-component.component.css']
})
export class PostDataComponentComponent implements OnInit {

  @Input() public post: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
