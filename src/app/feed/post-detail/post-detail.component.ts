import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Post } from './../../services/feed/post.model';
import { FeedService } from './../../services/feed/feed.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post!: Post;

  constructor(private route: ActivatedRoute, private feedService: FeedService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const postId = params.get('id') as string;
      if (postId) {
        this.post = this.feedService.getPost(postId);
      }
    });
  }

}
