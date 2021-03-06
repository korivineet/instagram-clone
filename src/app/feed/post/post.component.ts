import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post, PostComment } from './../../services/feed/post.model';
import { FeedService } from './../../services/feed/feed.service';
import { AccountService } from './../../services/account/account.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;

  constructor(
    private feedService: FeedService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void { }

  onToggleLike() {
    this.post.likedByUser = !this.post.likedByUser;
    if (this.post.likedByUser) {
      this.feedService.toggleLikeCountOnLikeClicked(this.post.id, 'inc');
    } else {
      this.feedService.toggleLikeCountOnLikeClicked(this.post.id, 'dec');
    }
  }

  onPhotoDblClicked() {
    if (this.post.likedByUser) {
      return;
    }
    this.post.likedByUser = true;
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
