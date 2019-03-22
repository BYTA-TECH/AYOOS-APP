import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-upload-record-modal',
  templateUrl: './upload-record-modal.component.html',
  styleUrls: ['./upload-record-modal.component.scss'],
})
export class UploadRecordModalComponent implements OnInit {

  constructor(private modalController:ModalController) { }


  dismissMe(){
    this.modalController.dismiss();
  }
  ngOnInit() {}

}
