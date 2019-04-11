import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DOCTORS } from '../mock-doctors';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
var DoctorsListPage = /** @class */ (function () {
    function DoctorsListPage(modalController) {
        this.modalController = modalController;
        this.searchTerm = '';
        this.selectedSearchTerm = '';
        this.doctors = DOCTORS;
    }
    DoctorsListPage.prototype.searchChanged = function () {
        console.log("Search Changed ");
    };
    DoctorsListPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: FilterModalComponent,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DoctorsListPage.prototype.ngOnInit = function () { };
    DoctorsListPage = tslib_1.__decorate([
        Component({
            selector: 'app-doctors-list',
            templateUrl: './doctors-list.page.html',
            styleUrls: ['./doctors-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], DoctorsListPage);
    return DoctorsListPage;
}());
export { DoctorsListPage };
//# sourceMappingURL=doctors-list.page.js.map