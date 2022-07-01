import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Post } from './../../services/feed/post.model';
import { AccountService } from './../../services/account/account.service';
import { FeedService } from './../../services/feed/feed.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  imageLink!: string;

  constructor(
    private accountService: AccountService,
    private feedService: FeedService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageLink = reader.result as string;
      };
    }
  }

  onSubmitPost(ngForm: NgForm) {
    const imageLink = ngForm.form.value.imageLink;
    const caption = ngForm.form.value.caption;
    const id = String(Math.round(Math.random() * 10000000000));

    const newPost = new Post(id, this.accountService.getUser(), imageLink, 0, caption, [], 'NOW', false);
    this.feedService.addNewPost(newPost);
    this.router.navigate(['/']);
  }

}
