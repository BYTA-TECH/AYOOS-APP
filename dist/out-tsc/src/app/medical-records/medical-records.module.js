import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MedicalRecordsPage } from './medical-records.page';
import { UploadRecordModalComponent } from '../upload-record-modal/upload-record-modal.component';
var routes = [
    {
        path: '',
        component: MedicalRecordsPage
    }
];
var MedicalRecordsPageModule = /** @class */ (function () {
    function MedicalRecordsPageModule() {
    }
    MedicalRecordsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MedicalRecordsPage, UploadRecordModalComponent],
            entryComponents: [UploadRecordModalComponent]
        })
    ], MedicalRecordsPageModule);
    return MedicalRecordsPageModule;
}());
export { MedicalRecordsPageModule };
//# sourceMappingURL=medical-records.module.js.map