import { MedicalRecord } from './../../MedicalRecord';
import { MedicalHistory } from './../../MedicalHistory';
import { MEDICALRECORDS } from './../../mock-medical-records';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { async } from 'q';
import { Key } from 'protractor';

@Component({
  selector: 'app-medical-record-detail',
  templateUrl: './medical-record-detail.page.html',
  styleUrls: ['./medical-record-detail.page.scss'],
})
export class MedicalRecordDetailPage implements OnInit {

  medicalRecords: MedicalRecord[] = [];
  constructor(private activatedRoute: ActivatedRoute, private popoverController: PopoverController) { }

  weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  async presentMailPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{popType:'mailShare'},
      event: ev,
      animated: true,
      translucent: true,
      backdropDismiss: true,
      showBackdrop: true
    });

    return await popover.present();
  }


  async presentDoctorChoose(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{popType:'doctorShare'},

      event: ev,
      animated: true,
      translucent: true,
      backdropDismiss: true,
      showBackdrop: true
    });

    return await popover.present();
  }




  async presentWhatsappPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{popType:'whatsappShare'},
      event: ev,
      animated: true,
      translucent: true,
      backdropDismiss: true,
      showBackdrop: true
    });

    return await popover.present();
  }

  async presentFacebookPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{popType:'facebookShare'},
      event: ev,
      animated: true,
      translucent: true,
      backdropDismiss: true,
      showBackdrop: true
    });

    return await popover.present();
  }



  ngOnInit() {
    let ref = this.activatedRoute.snapshot.paramMap.get('ref');
    MEDICALRECORDS.forEach(history => {
      if (history.ref == ref) {
        history.medicalRecord.forEach(medicalRecord => {
          this.medicalRecords.push(medicalRecord);
        })
      }
    })
  }

}
