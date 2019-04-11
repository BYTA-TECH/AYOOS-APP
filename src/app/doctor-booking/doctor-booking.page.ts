import { Doctor } from './../doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCTORS } from '../mock-doctors';
import {Slot} from './../Slot';
import {SLOTS} from './../mock-slots';

@Component({
  selector: 'app-doctor-booking',
  templateUrl: './doctor-booking.page.html',
  styleUrls: ['./doctor-booking.page.scss'],
})
export class DoctorBookingPage implements OnInit {

  doctor:Doctor;
  slotsMorningSession:Slot[]=[];
  slotsAfternoonSession:Slot[]=[];
  slotsEveningSession:Slot[]=[];


  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
   let id= this.activateRoute.snapshot.paramMap.get('id');
   DOCTORS.forEach(doctor=>{
     if(doctor.id.toString()==id){
      this.doctor=doctor;
     }
   });
   let index=1;
   SLOTS.forEach(slot=>{
     if(index<=9){
       this.slotsMorningSession.push(slot);
     }
     if(index<=18&&index>9){
      this.slotsAfternoonSession.push(slot);
    }
    if(index<=27&&index>18){
      this.slotsEveningSession.push(slot);
    }
    index++;
   });
  }
  genArray(value:number):any[]{
    value= Math.trunc(value);
    return new Array(value);
  }
}
