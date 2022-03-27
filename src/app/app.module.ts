import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PostDataComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
