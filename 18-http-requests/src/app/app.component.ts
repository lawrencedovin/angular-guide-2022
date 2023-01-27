import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

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

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(post: Post) {
    // Send Http request
    this.postsService.createPost(this.baseUrl, post);
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
