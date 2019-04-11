import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultationsPage } from './consultations.page';
var routes = [
    {
        path: '',
        component: ConsultationsPage
    }
];
var ConsultationsPageModule = /** @class */ (function () {
    function ConsultationsPageModule() {
    }
    ConsultationsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConsultationsPage]
        })
    ], ConsultationsPageModule);
    return ConsultationsPageModule;
}());
export { ConsultationsPageModule };
//# sourceMappingURL=consultations.module.js.map