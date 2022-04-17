import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging-component',
  templateUrl: './paging-component.component.html',
  styleUrls: ['./paging-component.component.css']
})
export class PagingComponentComponent implements OnInit {
  @Input() page : number;
  @Output() newPage = new EventEmitter<number>();

  newPageBtnLeft()
  {
    if(this.page > 1)
    {
      this.newPage.emit(this.page-1);
    }
  }

  newPageBtnRight()
  {
    this.newPage.emit(this.page + 1);
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
