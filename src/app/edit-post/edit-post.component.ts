import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public blogPost : BlogPost = new BlogPost();
  public tags : String = null;
  public querySub : any;

  constructor(private data: PostServiceService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params=>{
      this.data.getPostbyId(params['id']).subscribe(post=>{
        this.blogPost = post;
        this.tags = this.blogPost.tags.toString();
      });
    })
  }

  formSubmit() : void
  {
    this.blogPost.tags = this.tags.split(",").map(tag=>tag.trim());
    this.data.updatePostById(this.blogPost._id.toString(),this.blogPost).subscribe(()=>this.router.navigate(['/admin']));
  }

  deletePost() : void
  {
    this.data.deletePostById(this.blogPost._id.toString()).subscribe(()=>{
      this.router.navigate(['/admin']);
    })
  }

}
