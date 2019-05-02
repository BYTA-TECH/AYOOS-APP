import { Doctor } from './../../doctor';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";

declare var google:any;


@Component({
  selector: 'app-map-view-doctors',
  templateUrl: './map-view-doctors.page.html',
  styleUrls: ['./map-view-doctors.page.scss'],
})
export class MapViewDoctorsPage implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  @Input() doctors:Doctor[];

  

  constructor(private router:Router,private modalController:ModalController,private mapsLoader:MapsAPILoader) {
    this.mapsLoader.load();
   }

  routeToDoctor(id:number){
    console.log("In route to doctor method ")
    this.router.navigate(['/','doctor-booking',id]);
    this.modalController.dismiss();
  }

  dismissMe(){
    this.modalController.dismiss();
  }

  routeToGridView(){
    console.log("In route to doctor list method ")
    this.router.navigate(['/','doctors-list']);
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
