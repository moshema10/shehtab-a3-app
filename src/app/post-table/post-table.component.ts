import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {

  private postSub : any;
  public blogPosts : Array<BlogPost> = [];
  constructor(private data : PostServiceService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.postSub = this.data.getAllPosts().subscribe(allPost=>{
      this.blogPosts = allPost;
    });
  }

  rowClick(event,id)
  {
    this.router.navigate(["admin/post", id]);
  }

}
