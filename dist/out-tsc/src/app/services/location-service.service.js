import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
var LocationService = /** @class */ (function () {
    function LocationService(mapsAPILoader, mapsWrapper) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.mapsWrapper = mapsWrapper;
        console.log("Constror service location");
        this.mapsAPILoader.load().then(function () {
            _this.autoCompleteService = new google.maps.places.AutocompleteService();
        });
    }
    LocationService.prototype.getPredictions = function (searchTerm) {
        var _this = this;
        console.log("In the service location ");
        return Observable.create(function (observer) {
            _this.autoCompleteService.getPlacePredictions({ input: searchTerm }, function (data) {
                var previousData;
                if (data) {
                    console.log(data);
                    previousData = data;
                    observer.next(data);
                    observer.complete();
                }
                if (!data) {
                    console.log("PreviousData: ");
                    observer.next(previousData);
                    observer.complete();
                }
                else {
                    observer.error(status);
                }
            });
        });
    };
    LocationService.prototype.ngOnInit = function () {
    };
    LocationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [MapsAPILoader, GoogleMapsAPIWrapper])
    ], LocationService);
    return LocationService;
}());
export { LocationService };
//# sourceMappingURL=location-service.service.js.map