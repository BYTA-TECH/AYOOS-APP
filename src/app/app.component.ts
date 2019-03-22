import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
