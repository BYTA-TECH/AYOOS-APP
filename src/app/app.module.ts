import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DoctorsListPageModule } from './doctors-list/doctors-list.module';
import { LocationSearchPageModule } from './location-search/location-search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { AuthInterceptor } from './security/auth-interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {  GoogleMapsAPIWrapper, AgmCoreModule, InfoWindowManager } from '@agm/core';
import { FilterModalComponentModule } from './filter-modal/filter-modal.module';
import { MapViewDoctorsPageModule } from './map-view-doctors/map-view-doctors.module';
import {PopoverAddMemberPageModule} from './popover-add-member/popover-add-member.module'
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';


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
    PopoverAddMemberPageModule,
     AgmCoreModule.forRoot({
         apiKey:'AIzaSyCQc2iiem96Es76TEOcPkcSvfHx5wpvs28',
         libraries:['places','geometry']
       }),
       MapViewDoctorsPageModule
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMapsAPIWrapper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {

}
