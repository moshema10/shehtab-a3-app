import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-categories-component',
  templateUrl: './categories-component.component.html',
  styleUrls: ['./categories-component.component.css']
})
export class CategoriesComponentComponent implements OnInit {
  public categories: Array<any>;
  public catSub : any;
  constructor(private data:PostServiceService) { }

  ngOnInit(): void {
    this.catSub = this.data.getCategories().subscribe(cats=>{
      this.categories = cats;
    });
  }

}
