import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpecializationsListPage } from './specializations-list.page';
var routes = [
    {
        path: '',
        component: SpecializationsListPage
    }
];
var SpecializationsListPageModule = /** @class */ (function () {
    function SpecializationsListPageModule() {
    }
    SpecializationsListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SpecializationsListPage]
        })
    ], SpecializationsListPageModule);
    return SpecializationsListPageModule;
}());
export { SpecializationsListPageModule };
//# sourceMappingURL=specializations-list.module.js.map