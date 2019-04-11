import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { LocationService } from '../services/location-service.service';
import { MapsAPILoader } from '@agm/core';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { ModalController } from '@ionic/angular';
var LocationSearchPage = /** @class */ (function () {
    function LocationSearchPage(locationService, mapsAPILoader, modalController, ngZone) {
        this.locationService = locationService;
        this.mapsAPILoader = mapsAPILoader;
        this.modalController = modalController;
        this.ngZone = ngZone;
    }
    LocationSearchPage.prototype.onSearch = function () {
        var _this = this;
        console.log("In the onsearch");
        if (this.searchTerm === '' || this.searchTerm === null)
            return;
        this.locationService.getPredictions(this.searchTerm)
            .subscribe(function (res) {
            _this.values = res;
        });
    };
    LocationSearchPage.prototype.reverseGeocodeAndshowModal = function (locationValue, placeId) {
        console.log("Place id is  " + placeId);
        console.log("locationvalue " + locationValue);
        this.geocodeAddress(placeId);
        console.log("Array is inside showmodal " + this.latlon);
    };
    LocationSearchPage.prototype.geocodeAddress = function (place_id) {
        var _this = this;
        this.geocoder = new google.maps.Geocoder;
        this.geocoder.geocode({ 'placeId': place_id }, function (results, status) {
            if (status !== 'OK') {
                console.log('Geocoder failed due to: ' + status);
                return;
            }
            _this.ngZone.run(function () {
                _this.latlon = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];
                console.log("Lat is inside geo " + results[0].geometry.location.lat());
                console.log("Lon is inside geo " + results[0].geometry.location.lng());
                console.log("Lat lon " + _this.latlon);
            });
        });
        console.log("End of method " + this.latlon);
    };
    LocationSearchPage.prototype.presentModal = function (locationValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: FilterModalComponent,
                            componentProps: { location: locationValue,
                                lat: this.latlon[0],
                                lon: this.latlon[1] }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LocationSearchPage.prototype.retrivePlaceID = function (placeId) {
        console.log("Place id is " + placeId);
        this.placeId = placeId;
    };
    LocationSearchPage.prototype.ngOnInit = function () {
    };
    LocationSearchPage = tslib_1.__decorate([
        Component({
            selector: 'app-location-search',
            templateUrl: './location-search.page.html',
            styleUrls: ['./location-search.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LocationService, MapsAPILoader, ModalController, NgZone])
    ], LocationSearchPage);
    return LocationSearchPage;
}());
export { LocationSearchPage };
//# sourceMappingURL=location-search.page.js.map