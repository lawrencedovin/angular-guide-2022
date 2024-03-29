import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseURL = 'https://ng-complete-guide-b3e29-default-rtdb.firebaseio.com/posts.json';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(post: Post) {
    return this.http.post<{ name: string }>(
      this.baseURL,
      post,
      {
        observe: 'response'
      }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        this.baseURL,
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: searchParams
        }
      )
      .pipe(
        map(responseData => {
          const posts: Post[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)){
              posts.push({...responseData[key], id: key});
            }
          }
          return posts;
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      this.baseURL,
      {
        observe: 'events',
        responseType: 'json'
      }
    )
    .pipe(
        tap({
          next: (event: HttpEvent<any>) => {
            console.log(event);
            if(event.type === HttpEventType.Sent) {
              // Can perform some code here when response is sent to user.
            }
            if(event.type === HttpEventType.Response) {
              console.log(event.body);
            }
          }
        })
    );
  }
}


