import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentsPage } from './payments.page';
var routes = [
    {
        path: '',
        component: PaymentsPage
    }
];
var PaymentsPageModule = /** @class */ (function () {
    function PaymentsPageModule() {
    }
    PaymentsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PaymentsPage]
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());
export { PaymentsPageModule };
//# sourceMappingURL=payments.module.js.map