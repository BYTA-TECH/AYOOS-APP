import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoctorBookingPage } from './doctor-booking.page';
import { RequestConfimationPopoverComponent } from 'src/app/components/request-confimation-popover/request-confimation-popover.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorBookingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoctorBookingPage, RequestConfimationPopoverComponent],
  entryComponents: [RequestConfimationPopoverComponent]
})
export class DoctorBookingPageModule {}
