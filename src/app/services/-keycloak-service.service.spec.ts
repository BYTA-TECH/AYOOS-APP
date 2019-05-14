import { TestBed } from '@angular/core/testing';

import { KeycloakServiceService } from './-keycloak-service.service';

describe('KeycloakServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeycloakServiceService = TestBed.get(KeycloakServiceService);
    expect(service).toBeTruthy();
  });
});
