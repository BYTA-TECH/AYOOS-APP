import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HelpCenterPage } from './help-center.page';
var routes = [
    {
        path: '',
        component: HelpCenterPage
    }
];
var HelpCenterPageModule = /** @class */ (function () {
    function HelpCenterPageModule() {
    }
    HelpCenterPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HelpCenterPage]
        })
    ], HelpCenterPageModule);
    return HelpCenterPageModule;
}());
export { HelpCenterPageModule };
//# sourceMappingURL=help-center.module.js.map