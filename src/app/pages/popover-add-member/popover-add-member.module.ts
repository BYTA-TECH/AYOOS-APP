import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverAddMemberPage } from './popover-add-member.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverAddMemberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopoverAddMemberPage]
})
export class PopoverAddMemberPageModule {}
