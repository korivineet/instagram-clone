import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainFeedComponent } from './main-feed/main-feed.component';
import { StoriesComponent } from './stories/stories.component';
import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    FeedComponent,
    MainFeedComponent,
    StoriesComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
