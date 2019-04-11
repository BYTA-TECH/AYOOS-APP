import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DOCTORS } from '../mock-doctors';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
var HomePage = /** @class */ (function () {
    function HomePage(geolocation, nativeGeocoder, popoverController) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.popoverController = popoverController;
        this.searchTerm = '';
        this.selectedTab = 'All';
        this.sliderConfig = {
            spaceBetween: 2,
            slidesPreview: 1.6
        };
    }
    HomePage.prototype.presentPopover = function (ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var popover;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Inside popovercontroller " + this.searchTerm);
                        this.searchChanged();
                        return [4 /*yield*/, this.popoverController.create({
                                component: PopoverComponent,
                                event: ev,
                                animated: true,
                                translucent: true,
                                cssClass: ['custom-popover'],
                                backdropDismiss: true,
                                showBackdrop: true
                            })];
                    case 1:
                        popover = _a.sent();
                        if (!(this.searchTerm != '')) return [3 /*break*/, 3];
                        console.log("Popoover is about to work");
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.searchChanged = function () {
        console.log('Term is ++++++++' + this.searchTerm + " and gthe tab selected is " + this.selectedTab);
    };
    HomePage.prototype.segmentDoctors = function () {
        this.selectedTab = "Doctors";
    };
    HomePage.prototype.segmentSpecializations = function () {
        this.selectedTab = "Specializations";
    };
    HomePage.prototype.segmentClinics = function () {
        this.selectedTab = "clinics";
    };
    HomePage.prototype.getTopDoctors = function () {
        this.topDoctors = DOCTORS;
    };
    HomePage.prototype.genArray = function (value) {
        value = Math.trunc(value);
        return new Array(value);
    };
    HomePage.prototype.getCurrentLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var lat = resp.coords.latitude;
            var lon = resp.coords.longitude;
            console.log("Lat is " + lat);
            console.log("Lon is " + lon);
            _this.nativeGeocoder.reverseGeocode(lat, lon).then(function (result) {
                console.log("Location reversed is  " + JSON.stringify(result[0]));
            });
        }).catch(function (error) {
            console.log("Error gettong location ", error);
        });
    };
    HomePage.prototype.ngOnInit = function () {
        this.getCurrentLocation();
        this.getTopDoctors();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation, NativeGeocoder,
            PopoverController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map