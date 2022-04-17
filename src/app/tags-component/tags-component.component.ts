import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-tags-component',
  templateUrl: './tags-component.component.html',
  styleUrls: ['./tags-component.component.css']
})
export class TagsComponentComponent implements OnInit {

  public tags: Array<any>;
  public tagsSub: any;

  constructor(private data: PostServiceService) { }

  ngOnInit(): void {
    this.tagsSub = this.data.getTags().subscribe(tags=>{
      this.tags = tags;
    })
  }

}
