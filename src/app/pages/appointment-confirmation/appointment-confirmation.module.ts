// tslint:disable-next-line: max-line-length
import { AppointmentSuccessfullInfoComponent } from './../../components/appointment-successfull-info/appointment-successfull-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppointmentConfirmationPage } from './appointment-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentConfirmationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppointmentConfirmationPage],
  entryComponents: []
})
export class AppointmentConfirmationPageModule {}
