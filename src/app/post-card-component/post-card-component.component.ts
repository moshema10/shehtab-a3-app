import { Component, OnInit,Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-card-component',
  templateUrl: './post-card-component.component.html',
  styleUrls: ['./post-card-component.component.css']
})
export class PostCardComponentComponent implements OnInit {

  @Input() public post: BlogPost;
  @Input() public class: string = "col-xl-6";
  constructor() { }

  ngOnInit(): void {
  }

}
