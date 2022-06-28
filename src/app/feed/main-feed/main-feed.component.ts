import { Component, OnInit } from '@angular/core';

import { FeedService } from './../../services/feed/feed.service';
import { Post } from './../../services/feed/post.model';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {

  posts: Post[] = [];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.posts = this.feedService.getPosts();
  }

}
