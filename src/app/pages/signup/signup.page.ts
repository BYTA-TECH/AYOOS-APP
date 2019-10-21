import { AddressLineDTO } from './../../api/models/address-line-dto';
import { OAuthService } from 'angular-oauth2-oidc';
import { PatientDTO } from './../../api/models/patient-dto';
import { Patient } from './../../api/models/patient';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { getHeapStatistics } from 'v8';
import { RequiredActionAlias } from 'keycloak-admin/lib/defs/requiredActionProviderRepresentation';
import { CommandResourceService } from 'src/app/api/services';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private navCtrl: NavController,
    private commandResource: CommandResourceService,
    private oauthService: OAuthService) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
        baseUrl: 'http://34.74.192.113:8888/auth'

     });
    this.configureKeycloakAdmin();
  }

  username: string;
  password: string;
  email: string;
  kcAdminClient: KeycloakAdminClient;
  phone: number;
  agreement: boolean;

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin999',
      grantType: 'password',
      clientId: 'admin-cli',
      clientSecret: '7f8a027d-36dd-48fa-b09b-b26762029aa1'



    });
  }
  signup() {
    const map = new Map([
      ['phone', this.phone],
      ['value', 3]
    ]);

    this.kcAdminClient.users.create({
      realm: 'ayoos',
      username: this.username,
      email: this.email,
      enabled: true,
      credentials: [{
        type: 'password',
        value: this.password
      }],
      attributes: map

    }).then(res => {
      console.log('Account Created Keycloak');
      this.oauthService.fetchTokenUsingPasswordFlow(
        this.username, this.password, new HttpHeaders()
      ).then(() => {
        console.log('Logged In');
        const patient: PatientDTO = {};
        patient.patientCode = this.username;
        this.commandResource.createPatientUsingPOST(patient)
        .subscribe(() => {
          console.log('Patient Created');
          this.oauthService.logOut();
          this.navCtrl.navigateForward('/login');
        });
         const addressDto: AddressLineDTO = {};
         addressDto.patientId = patient.id;

        this.commandResource.createAddressLineUsingPOST(addressDto).subscribe(
          succs => {console.log('succ creating new addresLine for patient ', succs); },
          err => {console.log('error creating new adressLine for patient ', err);}
        );
      });
    });



  }

  dataChanged(agreement) {
    console.log('Old Agreement is ' + this.agreement);

    console.log('Agreement is ' + agreement);
    this.agreement = agreement;

  }


  ngOnInit() {
    this.agreement = false;
  }

}
