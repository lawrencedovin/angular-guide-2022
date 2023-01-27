import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  createPost(baseURL: string, post: Post) {
    this.http
    .post<{ name: string }>(baseURL + '/posts.json', post)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchPosts() {

  }
}
