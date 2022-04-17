/*********************************************************************************
* BTI425 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or 
* distributed to other students.
* 
* Name: Shehtab Masud Student ID: 119038206 Date: 4/15/2022
* Link: https://amazing-tarsier-9bd127.netlify.app 
*
********************************************************************************/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponentComponent } from './post-card-component/post-card-component.component';
import { SearchWidgetComponentComponent } from './search-widget-component/search-widget-component.component';
import { LatestPostsComponentComponent } from './latest-posts-component/latest-posts-component.component';
import { CategoriesComponentComponent } from './categories-component/categories-component.component';
import { TagsComponentComponent } from './tags-component/tags-component.component';
import { PostDataComponentComponent } from './post-data-component/post-data-component.component';
import { PagingComponentComponent } from './paging-component/paging-component.component';
import { FooterPostsComponentComponent } from './footer-posts-component/footer-posts-component.component';
import { FormsModule } from '@angular/forms';
import { PostTableComponent } from './post-table/post-table.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    BlogComponentComponent,
    PostComponentComponent,
    PageNotFoundComponent,
    PostCardComponentComponent,
    SearchWidgetComponentComponent,
    LatestPostsComponentComponent,
    CategoriesComponentComponent,
    TagsComponentComponent,
    PostDataComponentComponent,
    PagingComponentComponent,
    FooterPostsComponentComponent,
    PostTableComponent,
    EditPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
