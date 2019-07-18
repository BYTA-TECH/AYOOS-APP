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
      baseUrl: 'http://35.196.86.249:8080/auth'
    });
    this.configureKeycloakAdmin();
  }

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'karma123',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }

  updateCurrentUser(keycloakUser: any): Promise<void> {
    console.log('Trying to Update', keycloakUser);
    return this.kcAdminClient.users.update(
      {
        id: keycloakUser.sub,
        realm: 'graeshoppe'
      },
      {
        email: keycloakUser.email
      }
    );
  }
}
