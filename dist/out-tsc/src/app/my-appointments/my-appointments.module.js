import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyAppointmentsPage } from './my-appointments.page';
var routes = [
    {
        path: '',
        component: MyAppointmentsPage
    }
];
var MyAppointmentsPageModule = /** @class */ (function () {
    function MyAppointmentsPageModule() {
    }
    MyAppointmentsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MyAppointmentsPage]
        })
    ], MyAppointmentsPageModule);
    return MyAppointmentsPageModule;
}());
export { MyAppointmentsPageModule };
//# sourceMappingURL=my-appointments.module.js.map