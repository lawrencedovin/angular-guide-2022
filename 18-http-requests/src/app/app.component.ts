import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

interface PostData {
  title: string
  content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  loadedPosts = [];
  baseUrl = 'https://ng-complete-guide-b3e29-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: PostData) {
    // Send Http request
    this.subscription = this.http
      .post<PostData>(this.baseUrl + '/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
    });
  }
  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
