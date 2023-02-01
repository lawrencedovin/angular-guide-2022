import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroySubject: Subject<void> = new Subject();
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(post: Post) {
    // Send Http request
    this.postsService.createPost(post)
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true;

    this.postsService.fetchPosts()
      .pipe(takeUntil(this.destroySubject))
      .subscribe({
        next: (posts) => {
          this.isLoading = false;
          this.loadedPosts = posts;
        },
        error: (error) => {
          this.error = `${error.error.error}: ${error.message}`;
        }
    });
  }

  onDeletePosts() {
    // Send Http request
    this.postsService.deletePosts()
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.onFetchPosts();
      });
  }

  onCloseError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    // Unsubscribes from all observables
    this.destroySubject.next();
  }
}
