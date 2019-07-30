import { AppointmentSuccessfullInfoComponent } from './../../components/appointment-successfull-info/appointment-successfull-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdditionalConsultationInfoPage } from './additional-consultation-info.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionalConsultationInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdditionalConsultationInfoPage, AppointmentSuccessfullInfoComponent],
  entryComponents: [AppointmentSuccessfullInfoComponent]
})
export class AdditionalConsultationInfoPageModule {}
