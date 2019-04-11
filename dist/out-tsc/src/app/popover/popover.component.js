import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        console.log("Term is " + this.term);
        //  interval(1000 * 1).subscribe(x => {
        //   this.assignValues();
        //   console.log("Inside interval  "+this.term);
        //  });
    }
    PopoverComponent.prototype.assignValues = function () {
        console.log("In the async method popover ");
        this.topDoctors = [
            this.term,
            this.term
        ];
    };
    PopoverComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PopoverComponent.prototype, "term", void 0);
    PopoverComponent = tslib_1.__decorate([
        Component({
            selector: 'app-popover',
            templateUrl: './popover.component.html',
            styleUrls: ['./popover.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());
export { PopoverComponent };
//# sourceMappingURL=popover.component.js.map