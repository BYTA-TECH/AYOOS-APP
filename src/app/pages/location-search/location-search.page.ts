import { LocationService } from './../../services/location-service.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import {MapsAPILoader} from '@agm/core';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { ModalController } from '@ionic/angular';
import { isUndefined } from 'util';

declare var google:any;


@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.page.html',
  styleUrls: ['./location-search.page.scss'],
})
export class LocationSearchPage implements OnInit {

  searchTerm:string;
  placeId:string;
  values:any[];
  private geocoder:any;
  public latlon:number[];

  constructor(private locationService:LocationService,private mapsAPILoader:MapsAPILoader,private modalController:ModalController,private ngZone:NgZone  ) { }

  onSearch(){
    console.log("In the onsearch");
    if(this.searchTerm===''|| this.searchTerm===null) return ;
    this.locationService.getPredictions(this.searchTerm)
    .subscribe(
      res=>{
        this.values=res;
      }
    );

  }

forwardGeocodeAndshowModal(locationValue:string,placeId:string){
  console.log("Place id is  "+placeId);
  console.log("locationvalue "+locationValue);
  this.geocodeAddress(placeId);
  this.presentModal(locationValue);
}

public geocodeAddress(place_id: string){
  this.geocoder = new google.maps.Geocoder;
  this.geocoder.geocode({'placeId': place_id}, (results, status) => {
    if (status !== 'OK') {
      console.log('Geocoder failed due to: ' + status);
      return;
    }
    this.ngZone.run(() => {
    this.latlon=[results[0].geometry.location.lat(),results[0].geometry.location.lng()];
     console.log("Lat is inside geo "+results[0].geometry.location.lat());
     console.log("Lon is inside geo "+results[0].geometry.location.lng())
    });
  });
}



  async presentModal(locationValue:string) {
    console.log("Lat and lon is inside modal "+this.latlon);
    if(this.latlon!= undefined){
    const modal = await this.modalController.create({
      component: FilterModalComponent,
      componentProps: { location:  locationValue,
        lat:this.latlon[0],
        lon:this.latlon[1] }
    });
    return await modal.present();
  }
    
  }
  

  ngOnInit() {
  }

}
