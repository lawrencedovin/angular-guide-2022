import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  baseUrl = 'https://ng-complete-guide-b3e29-default-rtdb.firebaseio.com';
  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(Post: Post) {
    // Send Http request
    this.subscription = this.http
      .post<{ name: string }>(this.baseUrl + '/posts.json', Post)
      .subscribe(responseData => {
        console.log(responseData);
    });
  }
  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isLoading = true;
    this.http
      .get<{ [key: string]: Post }>(this.baseUrl + '/posts.json')
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
      )
      .subscribe(posts => {
        this.loadedPosts = posts;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
