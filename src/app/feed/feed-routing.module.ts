import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: 'p/:id',
    component: PostDetailComponent
  },
  {
    path: 'create',
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
