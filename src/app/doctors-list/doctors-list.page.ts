import { Component, OnInit } from '@angular/core';
import {Doctor} from '../doctor';
import {DOCTORS} from '../mock-doctors';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import {MapViewDoctorsPage} from '../map-view-doctors/map-view-doctors.page';
import {DoctorGrid} from '../DoctorGrid';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.page.html',
  styleUrls: ['./doctors-list.page.scss'],
})
export class DoctorsListPage implements OnInit {

  searchTerm='';
  doctors:Doctor[];
  grids:DoctorGrid[];
  selectedSearchTerm='';

  searchChanged(){
    console.log("Search Changed ");
  }
 
  generateMultiDimensionalArray(doctors:Doctor[]){
    this.grids=new Array(doctors.length);
    let i=0;
    for( i=0;i<doctors.length;i++){
      let grid=new DoctorGrid();
      grid.firstCol=doctors[i];
      grid.secondCol=doctors[i+1];
      this.grids[i]=grid;
      ++i;
      console.log("value is "+i);
    }
  }

  constructor(private modalController: ModalController) { 
    this.doctors=DOCTORS;
    this.generateMultiDimensionalArray(DOCTORS);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterModalComponent,
    });
    return await modal.present();
  }

  async presentMapModal() {
    const modal = await this.modalController.create({
      component: MapViewDoctorsPage,
      componentProps: { doctors: this.doctors }
    });
    return await modal.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  genArray(value:number):any[]{
    value= Math.trunc(value);
    return new Array(value);
  }

ngOnInit() {}

}
