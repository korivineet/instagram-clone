import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from './../../services/feed/post.model';
import { FeedService } from './../../services/feed/feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
  }

  onToggleLike() {
    this.post.likedByUser = !this.post.likedByUser;
  }

  onPhotoDblClicked() {
    this.post.likedByUser = true;
  }

  onSubmitComment(ngForm: NgForm) {
    const comment = ngForm.form.value.comment;
    this.feedService.addComment(this.post.id, comment);
    ngForm.reset();
  }
}
