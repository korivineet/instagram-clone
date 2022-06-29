import { Component, Input, OnInit } from '@angular/core';

import { Post } from './../../services/feed/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleLike() {
    this.post.likedByUser = !this.post.likedByUser;
  }

  onPhotoDblClicked() {
    this.post.likedByUser = true;
  }

}
