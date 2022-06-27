import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FeedModule } from '../feed/feed.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    FeedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
