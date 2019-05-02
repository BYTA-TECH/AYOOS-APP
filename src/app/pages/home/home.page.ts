import { LocationService } from './../../services/location-service.service';
import { DOCTORS } from './../../mock-doctors';
import { Doctor } from './../../doctor';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { FullTextSearchPage } from '../full-text-search/full-text-search.page';
import { MapsAPILoader } from '@agm/core';

declare var google:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

constructor(private popoverController: PopoverController,private modalController:ModalController,private locationService:LocationService,private mapsAPILoader:MapsAPILoader){

}

  result: Observable<any>;
  currentLocation:string;
  searchTerm='';
  selectedTab='All';
  

  topDoctors: Doctor[];

  

  async presentFullTextSearch() {
    const modal = await this.modalController.create({
      component: FullTextSearchPage,
    });
    return await modal.present();
  }

  // sliderConfig={
  //   spaceBetween:2,
  //   slidesPreview:1.6
  // }

 
  // 
  searchChanged(){

  }

  

  segmentDoctors(){
    this.selectedTab="Doctors";
  }

  segmentSpecializations(){
    this.selectedTab="Qualification";
  }
  segmentClinics(){
    this.selectedTab="clinics";
  }


  getTopDoctors(){
  
   this.topDoctors=DOCTORS;

  }

  genArray(value:number):any[]{
    value= Math.trunc(value);
    return new Array(value);
  }
  doRefresh(event:any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getCurrentLocation();
      event.target.complete();
    }, 2000);
  }
  getCurrentLocation() {
    this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder;
      console.log("Current lagt lon is "+this.locationService.currentLat);
      let latlng = { lat: this.locationService.currentLat, lng: this.locationService.currentLon };
      geocoder.geocode({ 'location': latlng },(results:any,status:any) =>{
        this.currentLocation=results[0].formatted_address.split(',',1)[0];
      });
    });
  }
  ngOnInit(){
    this.locationService.getCurrentLocation();
    this.getTopDoctors();
    this.getCurrentLocation()
    setTimeout(() => {
      console.log('Async Distance Currengt location ');
      this.getCurrentLocation()
    }, 2000)
  }

}
