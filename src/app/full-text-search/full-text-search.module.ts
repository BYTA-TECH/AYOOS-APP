import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FullTextSearchPage } from './full-text-search.page';

const routes: Routes = [
  {
    path: '',
    component: FullTextSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FullTextSearchPage]
})
export class FullTextSearchPageModule {}
