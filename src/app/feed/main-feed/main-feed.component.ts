import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FeedService } from './../../services/feed/feed.service';
import { Post } from './../../services/feed/post.model';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  postsSub = new Subscription();

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.posts = this.feedService.getPosts();
    this.postsSub = this.feedService.postChanged$.subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
