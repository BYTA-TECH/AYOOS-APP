import { AddressLine } from './../../api/models/address-line';
import { KeycloakService } from './../../services/-keycloak-service.service';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { NavController } from '@ionic/angular';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
import { PatientDTO, Patient, AddressLineDTO } from 'src/app/api/models';
import * as moment from 'moment';
// import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  fileToUpload: File;
  profile : any={};
  moreInfo : PatientDTO={};
  fileUrl = null;
  imageContentType : string =null;
  addressLine : AddressLineDTO[]=[{}];
  constructor(private oAuthService:OAuthService,
    private queryResourceService : QueryResourceService
    ,private navCtrl :NavController,
    private commandResourceService:CommandResourceService,
    private keyClockService : KeycloakService) {

   }
  
  ngOnInit() {
    this.oAuthService.loadUserProfile().then(profileData=>{console.log('success geting user profile ',
    profileData);

    this.profile =profileData;
   
    this.queryResourceService.findPatientUsingGET(this.profile.preferred_username).subscribe(
      sucss=>{console.log('succes geting patient data ',sucss);
      this.moreInfo=sucss;
      this.queryResourceService.getAllAddressLinesByPatientIdUsingGET(sucss.id).subscribe(
        succ=>{console.log('sucess geting adresslines using patientId',succ);
        this.addressLine=succ;
      },
      err=>{console.log('error geting adressLines using patienit iD',err)}
      );
    },
    err=>{console.log('error geting patient data',err);
    }

    );

    }
    ,error=>{console.log('error getting user profile ',error)});
    console.log('>>>>>>>>>>>33>>>>>>>>>>>>'+this.moreInfo.image);
  }

  logOut(){
    console.log('log out clicked');
    this.oAuthService.logOut();
    this.navCtrl.navigateForward('home');
  }
  save()
  {
    this.moreInfo.dob = moment.parseZone(this.moreInfo.dob).format().toString();
    console.log('>>>>>>>>Date' , this.moreInfo.dob);
    if (this.fileUrl != null) {
      this.moreInfo.image = this.fileUrl.substring(this.fileUrl.indexOf(',') + 1);
      this.moreInfo.imageContentType = this.fileToUpload.type;
      }
    console.log('>>>>>>>>>>>>>>>>>>>>>>>',this.moreInfo);
    this.commandResourceService.updatePatientUsingPUT(this.moreInfo).subscribe(
    sucss=>{console.log("succes updating profile data ie moreInfo",sucss);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>',this.moreInfo.image);
    this.moreInfo=sucss;
  },
    err=>{console.log("error updating profilr ",err);
  });
  this.keyClockService.updateCurrentUser(this.profile).then(succ=>{console.log('successfuly updated current user ',succ);},
  err=>{console.log('error updating keyclock user data ',err)});
  }

  triggerUpload(ev: Event) {
    document.getElementById('image').click();
  }

  onSelectFile(event) {

    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {

      this.fileUrl = ev.target.result;
      console.log('>>>>>>>fileUrl>>>>>>>',this.fileUrl);
    };
    freader.readAsDataURL(this.fileToUpload);
  }
 
}
