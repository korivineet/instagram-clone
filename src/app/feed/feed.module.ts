import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeedComponent } from './main-feed/main-feed.component';



@NgModule({
  declarations: [
    MainFeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainFeedComponent
  ]
})
export class FeedModule { }
