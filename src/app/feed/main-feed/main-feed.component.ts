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

  postSub = new Subscription();

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.posts = this.feedService.getPosts();
    this.postSub = this.feedService.postChanged$.subscribe(posts => {
      this.posts = posts;
    })
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
