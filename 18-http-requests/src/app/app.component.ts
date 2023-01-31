import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(post: Post) {
    // Send Http request
    this.postsService.createPost(post).subscribe(() => {
      this.onFetchPosts();
    })
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true;
    this.subscription = this.postsService.fetchPosts().subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    },
    error => {
      this.error = `${error.error.error}: ${error.message}`;
    });
  }

  onDeletePosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.onFetchPosts();
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
