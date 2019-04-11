import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler, AuthConfig, NullValidationHandler } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';

export const authConfig: AuthConfig = {
  issuer: 'http://35.237.193.86:8080/auth/realms/ayoos',
  redirectUri: window.location.origin,
  clientId: 'account',
  scope: 'openid profile email voucher offline_access',
  dummyClientSecret: '9717822c-8d73-46ef-b2b9-53012c6d3277',
  tokenEndpoint: 'http://35.237.193.86:8080/auth/realms/ayoos/protocol/openid-connect/token',
  userinfoEndpoint: 'http://35.237.193.86:8080/auth/realms/ayoos/protocol/openid-connect/userinfo',
  oidc:false,
  requireHttps:false

  
};


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
    private statusBar: StatusBar,
    private oauthService: OAuthService
  ) {

    this.initializeApp();
   this.configureWithNewConfigApi();
   //this.configurePasswordFlow();
   //this.configureAuth();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();


    // Optional
    this.oauthService.setupAutomaticSilentRefresh();

    this.oauthService.events.subscribe(e => {
      // tslint:disable-next-line:no-console
      console.debug('oauth/oidc event', e);
    });

    this.oauthService.events
      .pipe(filter(e => e.type === 'session_terminated'))
      .subscribe(e => {
        // tslint:disable-next-line:no-console
        console.debug('Your session has been terminated!');
      });

    this.oauthService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(e => {
        // this.oauthService.loadUserProfile();
      });
  }

  private configureAuth() {
    //
    // This method demonstrated the old API; see configureWithNewConfigApi for new one
    //

    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin + '/index.html';

    // URL of the SPA to redirect the user after silent refresh
    this.oauthService.silentRefreshRedirectUri =
      window.location.origin + '/silent-refresh.html';

    // The SPA's id. The SPA is registerd with this id at the auth-server
    this.oauthService.clientId = 'account';

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    this.oauthService.scope = 'openid profile email voucher';

    // Url of the Identity Provider
    this.oauthService.issuer =
      'http://35.237.193.86:8080/auth/realms/ayoos';

    this.oauthService.tokenValidationHandler = new NullValidationHandler();

    this.oauthService.events.subscribe(e => {
      // tslint:disable-next-line:no-console
      console.debug('oauth/oidc event', e);
    });

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then(doc => {
      this.oauthService.tryLogin();
    });

    this.oauthService.events
      .pipe(filter(e => e.type === 'token_expires'))
      .subscribe(e => {
        // tslint:disable-next-line:no-console
        console.debug('received token_expires event', e);
        this.oauthService.silentRefresh();
      });
  }

  private configurePasswordFlow() {
    // Set a dummy secret
    // Please note that the auth-server used here demand the client to transmit a client secret, although
    // the standard explicitly cites that the password flow can also be used without it. Using a client secret
    // does not make sense for a SPA that runs in the browser. That's why the property is called dummyClientSecret
    // Using such a dummy secreat is as safe as using no secret.
    this.oauthService.dummyClientSecret = '9717822c-8d73-46ef-b2b9-53012c6d3277';
  }
}
