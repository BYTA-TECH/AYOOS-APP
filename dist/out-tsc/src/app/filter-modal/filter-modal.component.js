import * as tslib_1 from "tslib";
import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
var FilterModalComponent = /** @class */ (function () {
    function FilterModalComponent(modalController) {
        this.modalController = modalController;
    }
    FilterModalComponent.prototype.dismissMe = function () {
        this.modalController.dismiss();
    };
    FilterModalComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], FilterModalComponent.prototype, "location", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], FilterModalComponent.prototype, "lat", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], FilterModalComponent.prototype, "lon", void 0);
    FilterModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-filter-modal',
            templateUrl: './filter-modal.component.html',
            styleUrls: ['./filter-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], FilterModalComponent);
    return FilterModalComponent;
}());
export { FilterModalComponent };
//# sourceMappingURL=filter-modal.component.js.map