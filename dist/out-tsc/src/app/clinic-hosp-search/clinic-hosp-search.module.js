import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClinicHospSearchPage } from './clinic-hosp-search.page';
var routes = [
    {
        path: '',
        component: ClinicHospSearchPage
    }
];
var ClinicHospSearchPageModule = /** @class */ (function () {
    function ClinicHospSearchPageModule() {
    }
    ClinicHospSearchPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ClinicHospSearchPage]
        })
    ], ClinicHospSearchPageModule);
    return ClinicHospSearchPageModule;
}());
export { ClinicHospSearchPageModule };
//# sourceMappingURL=clinic-hosp-search.module.js.map