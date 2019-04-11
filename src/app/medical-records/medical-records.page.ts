import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {UploadRecordModalComponent} from '../upload-record-modal/upload-record-modal.component';
import { MedicalHistory } from '../MedicalHistory';
import { MEDICALRECORDS } from '../mock-medical-records';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.page.html',
  styleUrls: ['./medical-records.page.scss'],
})
export class MedicalRecordsPage implements OnInit {

  constructor(private modalController:ModalController,private router:Router) { }

  ngOnInit() {
    this.medicalHistories=MEDICALRECORDS;
  }

  medicalHistories:MedicalHistory[];
  segment="all";
  searchTerm:string;
  searchChanged(){
  }
  onSelectAyoosHR(){
    this.segment="ayoosHR";
  }
  onSelectUploaded(){
    this.segment="uploaded";
  }
  onSelectAll(){
    this.segment="all";
  }

  routeToDetailView(ref:string){
    this.router.navigate(['/','medical-record-detail',ref]);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: UploadRecordModalComponent,
    });
    return await modal.present();
  }

}
