import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  perPage : number = 6;
  private maxNumber : number = Number.MAX_SAFE_INTEGER;
  
  
  constructor(private http: HttpClient) { }

  getPost(page, tag : string, category:string) : Observable<BlogPost[]>
  {
    var path : string = `https://senecablogapi.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage.toString()}`;
    if(tag != null || tag != undefined)
    {
      tag = tag.substring(1,tag.length-1);
      path += `&tag=${tag}`;
    }
    if(category != null || category != undefined)
    {
      path += `&category=${category}`;
    }
    return this.http.get<BlogPost[]>(path);
  }

  getPostbyId(id:String) : Observable<BlogPost>
  {
    var path : string = `https://senecablogapi.herokuapp.com/api/posts/${id}`;
    return this.http.get<BlogPost>(path);
  }

  getCategories():Observable<any[]>
  {
    var path : string = "https://senecablogapi.herokuapp.com/api/categories";
    return this.http.get<any[]>(path);
  }

  getTags() : Observable<string[]>
  {
    var path : string = "https://senecablogapi.herokuapp.com/api/tags";
    return this.http.get<string[]>(path);
  }

  getAllPosts() : Observable<BlogPost[]>
  {
    
    var path : string = `https://senecablogapi.herokuapp.com/api/posts?page=1&perPage=${this.maxNumber.toString()}`;
    return this.http.get<BlogPost[]>(path);
  }

  newPost(data:BlogPost) : Observable<any>
  {
    var path : string = "https://senecablogapi.herokuapp.com/api/posts";
    return this.http.post<any>(path,data);
  }

  updatePostById(id:String, data:BlogPost) : Observable<any>
  {
    var path : string = `https://senecablogapi.herokuapp.com/api/posts/${id}`;
    return this.http.put<any>(path,data);
  }

  deletePostById(id:String) : Observable<any>
  {
    var path : string = `https://senecablogapi.herokuapp.com/api/posts/${id}`;
    return this.http.delete<any>(path);
  }

}
