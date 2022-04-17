import { Component, OnInit} from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-latest-posts-component',
  templateUrl: './latest-posts-component.component.html',
  styleUrls: ['./latest-posts-component.component.css']
})
export class LatestPostsComponentComponent implements OnInit {
  
  public posts: Array<BlogPost>;
  public postSub: any;

  constructor(private data: PostServiceService) { }

  ngOnInit(): void {
    this.postSub = this.data.getPost(1,null,null).subscribe(datas=>{
      this.posts = datas.slice(0,3);
    })
  }

  ngOnDestroy() : void{
    this.postSub.unsubscribe();
  }

}
