import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';


@Component({
  selector: 'app-footer-posts-component',
  templateUrl: './footer-posts-component.component.html',
  styleUrls: ['./footer-posts-component.component.css']
})
export class FooterPostsComponentComponent implements OnInit {

  public posts: Array<BlogPost>;
  public postSub: any;

  constructor(private data : PostServiceService) { }

  ngOnInit(): void {
    this.postSub = this.data.getPost(1,null,null).subscribe((posts)=>{
      this.posts = posts.slice(0,3);
    });
  }

  ngOnDestroy() : void{
    this.postSub.unsubscribe();
  }

}
