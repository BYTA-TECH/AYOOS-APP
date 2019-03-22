import * as tslib_1 from "tslib";
import { FilterModalComponent } from './filter-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
var routes = [
    {
        path: '',
        component: FilterModalComponent
    }
];
var FilterModalComponentModule = /** @class */ (function () {
    function FilterModalComponentModule() {
    }
    FilterModalComponentModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FilterModalComponent]
        })
    ], FilterModalComponentModule);
    return FilterModalComponentModule;
}());
export { FilterModalComponentModule };
//# sourceMappingURL=filter-modal.module.js.map