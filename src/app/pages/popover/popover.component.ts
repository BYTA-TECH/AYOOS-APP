import { DOCTORS } from './../../mock-doctors';
import { Doctor } from './../../api/models/doctor';
import { Component, OnInit, Input } from '@angular/core';
import { templateRefExtractor } from '@angular/core/src/render3';
import { interval } from 'rxjs';
import { PopoverController, ToastController } from '@ionic/angular';
import { getHeapStatistics } from 'v8';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {



  mail: string;
  popType: string;
  searchTerm: string;
  searchDoctors: Doctor[] = [];

 


  onSearch() {
    this.searchDoctors = [];
    DOCTORS.forEach(doctor => {
      if (doctor.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
        this.searchDoctors.push(doctor);
      }
    })
  }
  constructor(private popoverController: PopoverController, private toastController: ToastController) {

  }

  shareRecordViaMail() {
    console.log("Mail successfully send to " + this.mail);
    this.presentToast();
  }
  shareRecordToDoctor(doctor: Doctor) {
    console.log("shared record to Doctor  " + doctor);
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You have successfully shared record',
      duration: 2000
    });
    this.popoverController.dismiss();
    toast.present();

  }

  ngOnInit() { }

}
