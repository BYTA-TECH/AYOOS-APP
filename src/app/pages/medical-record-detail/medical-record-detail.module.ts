import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicalRecordDetailPage } from './medical-record-detail.page';
import { PopoverComponent } from '../popover/popover.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalRecordDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalRecordDetailPage,PopoverComponent],
  entryComponents:[PopoverComponent]
})
export class MedicalRecordDetailPageModule {}
