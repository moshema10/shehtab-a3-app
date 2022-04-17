import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-data-component',
  templateUrl: './post-data-component.component.html',
  styleUrls: ['./post-data-component.component.css']
})
export class PostDataComponentComponent implements OnInit {

  private querySub : any;
  public post: BlogPost;
  public commentName : string = null;
  public commentText : string = null;
  

  constructor(private data: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this.data.getPostbyId(params['id']).subscribe(data=>{
        this.post = data;
      })
     })
     
  }

  submitComment() : void
  {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date : new Date().toLocaleDateString()
    });

    this.data.updatePostById(this.post._id,this.post).subscribe(()=>{
      this.commentName = null;
      this.commentText = null;
    })

  }

  ngOnDestroy()
  {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
