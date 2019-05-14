import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { NavController } from '@ionic/angular';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
import { PatientDTO, Patient } from 'src/app/api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile : any={};
  moreInfo : Patient={};
  constructor(private oAuthService:OAuthService,
    private queryResourceService : QueryResourceService
    ,private navCtrl :NavController,
    private commandResourceService:CommandResourceService) {

   }
  
  ngOnInit() {
    this.oAuthService.loadUserProfile().then(profileData=>{console.log('success geting user profile ',
    profileData);
    this.profile =profileData;
    this.queryResourceService.findPatientUsingGET(this.profile.preferred_username).subscribe(
      sucss=>{console.log('succes geting patient data ',sucss);
      this.moreInfo=sucss;
    
    },
    err=>{console.log('error geting patient data',err);
    }

    );

    }
    ,error=>{console.log('error getting user profile ',error)})
  }

  logOut(){
    console.log('log out clicked');
    this.oAuthService.logOut();
    this.navCtrl.navigateForward('home');
  }
  save()
  {
    this.commandResourceService.updatePatientUsingPUT(this.moreInfo).subscribe(
    sucss=>{console.log("succes updating profile data ie moreInfo",sucss);},
    err=>{console.log("error updating profilr ",err);
    
    
  });
  // this.keyClock.up
  }
 
}
