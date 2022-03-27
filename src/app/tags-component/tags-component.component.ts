import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-component',
  templateUrl: './tags-component.component.html',
  styleUrls: ['./tags-component.component.css']
})
export class TagsComponentComponent implements OnInit {

  public tags: Array<any> = [
    "#funny",
    "#dramatic",
    "#rental",
    "#seeagain",
    "#spooky",
    "#worththecost",
    "#lovedIt",
    "#scary",
    "#silly",
    "#good4kidz"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
