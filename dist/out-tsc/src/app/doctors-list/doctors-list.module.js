import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DoctorsListPage } from './doctors-list.page';
var routes = [
    {
        path: '',
        component: DoctorsListPage
    }
];
var DoctorsListPageModule = /** @class */ (function () {
    function DoctorsListPageModule() {
    }
    DoctorsListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DoctorsListPage],
            entryComponents: []
        })
    ], DoctorsListPageModule);
    return DoctorsListPageModule;
}());
export { DoctorsListPageModule };
//# sourceMappingURL=doctors-list.module.js.map