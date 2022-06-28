import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { StoriesComponent } from './stories/stories.component';
import { FeedComponent } from './feed.component';



@NgModule({
  declarations: [
    FeedComponent,
    MainFeedComponent,
    StoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
