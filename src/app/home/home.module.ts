import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FeedModule } from '../feed/feed.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    FeedModule
  ],
  exports: [
    HomeComponent,
    FooterComponent
  ]
})
export class HomeModule { }
