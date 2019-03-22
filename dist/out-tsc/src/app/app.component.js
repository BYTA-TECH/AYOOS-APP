import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'My Appointments',
                url: '/my-appointments',
                icon: 'calendar'
            },
            {
                title: 'Medical Records',
                url: '/medical-records',
                icon: 'filing'
            },
            {
                title: 'Consultations',
                url: '/consultations',
                icon: 'pulse'
            },
            {
                title: 'Reminders',
                url: '/reminders',
                icon: 'alarm'
            },
            {
                title: 'Payments',
                url: '/payments',
                icon: 'cash'
            },
            {
                title: 'Settings',
                url: '/settings',
                icon: 'settings'
            },
            {
                title: 'Help Center',
                url: '/help-center',
                icon: 'help'
            },
            {
                title: 'About Us',
                url: '/about-us',
                icon: 'business'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map