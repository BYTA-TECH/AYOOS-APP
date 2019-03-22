import * as tslib_1 from "tslib";
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
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsAPIWrapper, AgmCoreModule } from '@agm/core';
import { FilterModalComponentModule } from './filter-modal/filter-modal.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyD95JHqcUsr7jccXOlD3ZFhpN4S11Qy06Q',
                    libraries: ['places']
                }),
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                GoogleMapsAPIWrapper
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map