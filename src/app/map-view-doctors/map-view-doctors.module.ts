import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {   AgmCoreModule, AgmMap, AgmMarker, InfoWindowManager, GoogleMapsAPIWrapper } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { MapViewDoctorsPage } from './map-view-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: MapViewDoctorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCQc2iiem96Es76TEOcPkcSvfHx5wpvs28'
    })
  ],
  declarations: [MapViewDoctorsPage],
  entryComponents:[]
})
export class MapViewDoctorsPageModule {}
