import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
