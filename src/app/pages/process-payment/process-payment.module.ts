import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcessPaymentPage } from './process-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessPaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProcessPaymentPage],
  entryComponents: []
})
export class ProcessPaymentPageModule {}
