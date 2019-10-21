import { OAuthService } from 'angular-oauth2-oidc';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  kcAdminClient: KeycloakAdminClient;

  constructor(
  ) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
      baseUrl: 'http://34.74.192.113:8888/auth'
    });
    this.configureKeycloakAdmin();
  }

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin999',
      grantType: 'password',
      clientId: 'admin-cli',
      clientSecret: '7f8a027d-36dd-48fa-b09b-b26762029aa1'
    });
  }

  updateCurrentUser(keycloakUser: any): Promise<void> {
    console.log('Trying to Update', keycloakUser);
    return this.kcAdminClient.users.update(
      {
        id: keycloakUser.sub,
        realm: 'Ayoos'
      },
      {
        email: keycloakUser.email
      }
    );
  }
}
