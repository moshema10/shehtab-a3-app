import { Component, OnInit} from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';


@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {

  public AllblogPosts: any | Array<BlogPost>;

  public page : number = 1;
  public tag : string = null;
  public category : string = null;
  public querySub : any;

  constructor(private route: ActivatedRoute, private blogPosts : PostServiceService) { }
  
  ngOnInit(): void {


    this.querySub = this.route.queryParams.subscribe((params) => {

      if (params['tag']) 
      {
        this.tag = params['tag'];
        this.category = null;
      } 
      else 
      {
        this.tag = null;
      }


      if (params['category']) {
        this.category = params['category'];
        this.tag = null;
      } else {
        this.category = null;
      }


      this.getPage(+params['page'] || 1);
    });


  }

  getPage(num)
  {
    this.querySub = this.blogPosts.getPost(num,this.tag,this.category).subscribe(data=>{
      if(data.length > 0)
      {
        this.AllblogPosts = data;
        this.page = num;
      }
    });
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
  }

}
