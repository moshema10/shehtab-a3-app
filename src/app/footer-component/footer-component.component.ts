import { Component, OnInit,Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import BlogData from '../../app/blogData.json';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  @Input() public Topposts: Array<BlogPost> = BlogData.slice(0,3);

  constructor() { }

  ngOnInit(): void {
  }

}
