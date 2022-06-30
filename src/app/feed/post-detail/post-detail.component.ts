import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Post, PostComment } from './../../services/feed/post.model';
import { FeedService } from './../../services/feed/feed.service';
import { AccountService } from './../../services/account/account.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post!: Post;

  constructor(
    private route: ActivatedRoute, 
    private feedService: FeedService,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const postId = params.get('id') as string;
      if (postId) {
        this.post = this.feedService.getPost(postId);
      }
    });
  }

  onToggleLike() {
    this.post.likedByUser = !this.post.likedByUser;
    if (this.post.likedByUser) {
      this.feedService.toggleLikeCountOnLikeClicked(this.post.id, 'inc');
    } else {
      this.feedService.toggleLikeCountOnLikeClicked(this.post.id, 'dec');
    }
  }

  onSubmitComment(ngForm: NgForm) {
    const comment = ngForm.form.value.comment;
    const account = this.accountService.getUser();
    const newComment = new PostComment(account, comment);
    this.feedService.addComment(this.post.id, newComment);
    ngForm.reset();
  }
}
