import { LocationService } from './../services/location-service.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  @Input() location:string;
  @Input() lat:number;
  @Input() lon:number;

  feeRange:number;

  dismissMe(){
    this.modalController.dismiss();
  }
  ngOnInit() {}

}
