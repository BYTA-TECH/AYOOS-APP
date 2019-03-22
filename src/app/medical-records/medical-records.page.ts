import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {UploadRecordModalComponent} from '../upload-record-modal/upload-record-modal.component';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.page.html',
  styleUrls: ['./medical-records.page.scss'],
})
export class MedicalRecordsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
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
  async presentModal() {
    const modal = await this.modalController.create({
      component: UploadRecordModalComponent,
      //componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
