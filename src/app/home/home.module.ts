import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PopoverComponent } from '../popover/popover.component';
import { FullTextSearchPage } from '../full-text-search/full-text-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,FullTextSearchPage],
  entryComponents: [FullTextSearchPage],

})
export class HomePageModule {}
