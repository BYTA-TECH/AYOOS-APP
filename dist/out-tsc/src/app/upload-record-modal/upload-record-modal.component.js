import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var UploadRecordModalComponent = /** @class */ (function () {
    function UploadRecordModalComponent(modalController) {
        this.modalController = modalController;
    }
    UploadRecordModalComponent.prototype.dismissMe = function () {
        this.modalController.dismiss();
    };
    UploadRecordModalComponent.prototype.ngOnInit = function () { };
    UploadRecordModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-upload-record-modal',
            templateUrl: './upload-record-modal.component.html',
            styleUrls: ['./upload-record-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], UploadRecordModalComponent);
    return UploadRecordModalComponent;
}());
export { UploadRecordModalComponent };
//# sourceMappingURL=upload-record-modal.component.js.map