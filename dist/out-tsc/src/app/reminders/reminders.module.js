import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RemindersPage } from './reminders.page';
var routes = [
    {
        path: '',
        component: RemindersPage
    }
];
var RemindersPageModule = /** @class */ (function () {
    function RemindersPageModule() {
    }
    RemindersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RemindersPage]
        })
    ], RemindersPageModule);
    return RemindersPageModule;
}());
export { RemindersPageModule };
//# sourceMappingURL=reminders.module.js.map