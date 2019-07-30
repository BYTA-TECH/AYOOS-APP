import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import {
  QueryResourceService,
  CommandResourceService
} from 'src/app/api/services';
import { Slot } from './../../Slot';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment, Doctor } from 'src/app/api/models';

@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.page.html',
  styleUrls: ['./appointment-confirmation.page.scss']
})
export class AppointmentConfirmationPage implements OnInit {
  slot: Slot;
  doctor: Doctor;
  appointment: Appointment;
  currentDate = new Date();
  paymentMethod: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private queryService: QueryResourceService,
    private commandresourceService: CommandResourceService,
    private dataService: DataService,
    private navCtrl: NavController
  ) {}

  proceedToPay() {
    this.dataService.paymentMethod = this.paymentMethod;
    this.commandresourceService.createConfirmPaymentUsingPOST({taskId: this.dataService.nextTaskId,
       paymentConfirmationRequest: {paymentDecision: 'proceed'}}).subscribe(response => {
         console.log('Next taskId is ***** ' + response.nextTaskId);
         this.dataService.nextTaskId = response.nextTaskId;
         this.navCtrl.navigateForward('process-payment');

       });
  }

  ngOnInit() {
    console.log(' Task id is ******** ' + this.dataService.nextTaskId);
    this.slot = new Slot();
    this.slot.time = new Date();
    const trackingId = this.activatedRoute.snapshot.paramMap.get('trackingId');
    this.queryService
      .findAppointmentByTrackingIdUsingGET(trackingId)
      .subscribe(appointment => {
        this.appointment = appointment;
        this.dataService.appointment = appointment;
        console.log('Timing are ' + appointment.timing.day);
        console.log('Timing are ' + appointment.timing.startFrom);

        this.queryService
          .findDoctorByDoctorIdUsingGET(appointment.doctorId)
          .subscribe(doctor => {
            this.doctor = doctor;
          });
      });
  }
}
