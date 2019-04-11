import * as tslib_1 from "tslib";
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { UploadRecordModalComponent } from '../upload-record-modal/upload-record-modal.component';
var MedicalRecordsPage = /** @class */ (function () {
    function MedicalRecordsPage(modalController) {
        this.modalController = modalController;
    }
    MedicalRecordsPage.prototype.ngOnInit = function () {
    };
    MedicalRecordsPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: UploadRecordModalComponent,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MedicalRecordsPage = tslib_1.__decorate([
        Component({
            selector: 'app-medical-records',
            templateUrl: './medical-records.page.html',
            styleUrls: ['./medical-records.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], MedicalRecordsPage);
    return MedicalRecordsPage;
}());
export { MedicalRecordsPage };
//# sourceMappingURL=medical-records.page.js.map