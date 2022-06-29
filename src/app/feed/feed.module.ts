import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FeedRoutingModule } from './feed-routing.module';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { StoriesComponent } from './stories/stories.component';
import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    FeedComponent,
    MainFeedComponent,
    StoriesComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FeedRoutingModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
