import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public blogPost : BlogPost = new BlogPost();
  public tags : String = null;

  constructor(private data:PostServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  formSubmit() : void{
    this.blogPost.tags = this.tags.split(",").map(tag=>tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "BTI425 Students";
    this.blogPost.views = 0;
    this.data.newPost(this.blogPost).subscribe(()=>{
      this.router.navigate(['/admin']);
    })
  }

}
