import { RatingComponent } from './../../shared/components/rating/rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {MapViewDoctorsPage} from '../map-view-doctors/map-view-doctors.page';

import { DoctorsListPage } from './doctors-list.page';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterModalComponentModule } from '../filter-modal/filter-modal.module';

const routes: Routes = [
  {
    path: '',
    component: DoctorsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FilterModalComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoctorsListPage],
  entryComponents:[RatingComponent , FilterModalComponent]
})
export class DoctorsListPageModule {}
