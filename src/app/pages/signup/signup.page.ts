import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client'
import { getHeapStatistics } from 'v8';
import { RequiredActionAlias } from 'keycloak-admin/lib/defs/requiredActionProviderRepresentation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private navCtrl: NavController) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
        baseUrl:'http://35.237.193.86:8080/auth'

     })
    this.configureKeycloakAdmin();
  }

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli'



    });
  }

  username: string;
  password: string;
  email: string;
  kcAdminClient: KeycloakAdminClient;
  phone: number;
  agreement:boolean;
  signup() {
    let map = new Map([
      ["phone", this.phone],
      ["value", 3]
    ]);

    this.kcAdminClient.users.create({
      realm:'ayoos',
      username: this.username,
      email: this.email,
      enabled: true,
      credentials: [{
        type: 'password',
        value: this.password
      }],
      attributes: map

    }).then(res => {
      this.navCtrl.navigateForward("/login");

    });



  }

  dataChanged(agreement){
    console.log("Old Agreement is "+this.agreement);

    console.log("Agreement is "+agreement);
    this.agreement=agreement;

  }


  ngOnInit() {
    this.agreement=false;
  }

}
