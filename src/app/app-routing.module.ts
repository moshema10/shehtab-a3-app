import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponentComponent } from './post-card-component/post-card-component.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostTableComponent } from './post-table/post-table.component';

const routes: Routes = [
  {path: "home", component: HomeComponentComponent},
  {path: "blog", component: BlogComponentComponent},
  {path: "post/:id", component: PostComponentComponent},
  {path: "post/card", component: PostCardComponentComponent},
  {path: "admin", component: PostTableComponent},
  {path: "admin/post/:id", component: EditPostComponent},
  {path: "admin/newPost", component: NewPostComponent},
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
