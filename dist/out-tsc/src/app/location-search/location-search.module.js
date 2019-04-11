import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocationSearchPage } from './location-search.page';
var routes = [
    {
        path: '',
        component: LocationSearchPage
    }
];
var LocationSearchPageModule = /** @class */ (function () {
    function LocationSearchPageModule() {
    }
    LocationSearchPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LocationSearchPage],
            entryComponents: [],
            providers: []
        })
    ], LocationSearchPageModule);
    return LocationSearchPageModule;
}());
export { LocationSearchPageModule };
//# sourceMappingURL=location-search.module.js.map