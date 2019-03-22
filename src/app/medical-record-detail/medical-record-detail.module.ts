import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicalRecordDetailPage } from './medical-record-detail.page';

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
  declarations: [MedicalRecordDetailPage]
})
export class MedicalRecordDetailPageModule {}
