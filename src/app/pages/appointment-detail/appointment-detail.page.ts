import { APPOINTMENTS } from './../../mock-appointments';
import { Appointment } from './../../Appointment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.page.html',
  styleUrls: ['./appointment-detail.page.scss'],
})
export class AppointmentDetailPage implements OnInit {

  selectedAppointment:Appointment;
  


  constructor(private activatedRoute:ActivatedRoute) { }



 
  
  genArray(value:number):any[]{
    value= Math.trunc(value);
    return new Array(value);
  }

  
  ngOnInit() {
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    APPOINTMENTS.forEach(value=>{
      if(value.id.toString()===id){
        console.log("Found an equal "+id);
        this.selectedAppointment=value;
      }
    })
  }

}
