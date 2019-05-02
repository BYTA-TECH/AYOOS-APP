import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { Doctor } from './../../api/models/doctor';
import { QueryResourceService } from 'src/app/api/services';
import { SLOTS } from './../../mock-slots';
import { Slot } from './../../Slot';
import { DOCTORS } from './../../mock-doctors';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-booking',
  templateUrl: './doctor-booking.page.html',
  styleUrls: ['./doctor-booking.page.scss'],
})
export class DoctorBookingPage implements OnInit {

  doctorId: string;
  keyCloakUser: any = {};
  doctor: Doctor;
  slotsMorningSession: Slot[] = [];
  slotsAfternoonSession: Slot[] = [];
  slotsEveningSession: Slot[] = [];
  kcAdminClient: KeycloakAdminClient;


  constructor(
    private activateRoute: ActivatedRoute,
    private queryResourceService: QueryResourceService) {
      this.kcAdminClient = new KeycloakAdminClient();
      this.kcAdminClient.setConfig({
          baseUrl: 'http://35.237.193.86:8080/auth'
       });
    }

  ngOnInit() {
    this.doctorId = this.activateRoute.snapshot.paramMap.get('id');
    this.configureKeycloakAdmin();
  }


  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli'
    })
    .then(data => {
      this.getDoctor();
    });
  }

  getDoctor() {
    this.kcAdminClient.users.find({realm: 'graeshoppe', username: this.doctorId})
    .then(data => {
      console.log(data);
      this.keyCloakUser = data[0];
    })
    .catch(data => {
      console.log('Got User From Keycloak' , data);
   
    });
    this.queryResourceService.findDoctorUsingGET(this.doctorId)
    .subscribe(result => {
      console.log('Doctor Booking' , result);
      this.doctor = result;
    });
  }
}
