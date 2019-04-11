import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, ModalController } from '@ionic/angular';

import { MedicalRecordsPage } from './medical-records.page';
import { UploadRecordModalComponent } from '../upload-record-modal/upload-record-modal.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalRecordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalRecordsPage,UploadRecordModalComponent],
  entryComponents:[UploadRecordModalComponent]
})
export class MedicalRecordsPageModule {


}
