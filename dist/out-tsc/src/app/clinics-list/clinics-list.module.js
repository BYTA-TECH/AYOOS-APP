import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClinicsListPage } from './clinics-list.page';
var routes = [
    {
        path: '',
        component: ClinicsListPage
    }
];
var ClinicsListPageModule = /** @class */ (function () {
    function ClinicsListPageModule() {
    }
    ClinicsListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ClinicsListPage]
        })
    ], ClinicsListPageModule);
    return ClinicsListPageModule;
}());
export { ClinicsListPageModule };
//# sourceMappingURL=clinics-list.module.js.map