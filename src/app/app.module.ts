import { DoctorsListPageModule } from './doctors-list/doctors-list.module';
import { LocationSearchPageModule } from './location-search/location-search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { FilterModalComponent } from './filter-modal/filter-modal.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {  GoogleMapsAPIWrapper, AgmCoreModule, InfoWindowManager } from '@agm/core';
import { FilterModalComponentModule } from './filter-modal/filter-modal.module';
import { MapViewDoctorsPageModule } from './map-view-doctors/map-view-doctors.module';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LocationSearchPageModule,
    DoctorsListPageModule,
    FilterModalComponentModule,
    DoctorsListPageModule,
     AgmCoreModule.forRoot({
         apiKey:'AIzaSyCQc2iiem96Es76TEOcPkcSvfHx5wpvs28',
         libraries:['places','geometry']
       }),
       MapViewDoctorsPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {

}
