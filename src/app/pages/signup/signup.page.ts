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
        baseUrl: 'http://35.237.193.86:8080/auth'

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
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli'



    });
  }
  signup() {
    const map = new Map([
      ['phone', this.phone],
      ['value', 3]
    ]);

    this.kcAdminClient.users.create({
      realm: 'graeshoppe',
      username: this.username,
      email: this.email,
      enabled: true,
      credentials: [{
        type: 'password',
        value: this.password
      }],
      attributes: map

    }).then(res => {
      console.log("Account Created Keycloak");
      this.oauthService.fetchTokenUsingPasswordFlow(
        this.username, this.password, new HttpHeaders()
      ).then(() => {
        console.log("Logged In");
        const patient: PatientDTO = {};
        patient.patientCode = this.username;
        this.commandResource.createPatientUsingPOST(patient)
        .subscribe(() => {
          console.log("Patient Created");
          this.oauthService.logOut();
          this.navCtrl.navigateForward('/login');
        });
      });
    });



  }

  dataChanged(agreement) {
    console.log('Old Agreement is '+ this.agreement);

    console.log('Agreement is '+ agreement);
    this.agreement = agreement;

  }


  ngOnInit() {
    this.agreement = false;
  }

}
