
import { QueryResourceService } from 'src/app/api/services';
import { LocationService } from './../../services/location-service.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private queryResourceService: QueryResourceService
  ) { }

  // @Input() location:string;
  // @Input() lat:number;
  // @Input() lon:number;

  feeRange: number;
  ratings: number;
  specialization: string = 'MBBS';
  consultationChannel: string[];

  qualifications: string;



  dismissMe() {

    let facetSearch: QueryResourceService.FacetSearchUsingGETParams = {

      specialization: this.specialization,
      rating: this.ratings,
      feeTo: this.feeRange,
      feeFrom: 10

  }
    this.modalController.dismiss(
      facetSearch
    );
  }
  ngOnInit() {
    this.getQualifications();
  }

  getQualifications() {
    this.queryResourceService.findAllQualificationUsingGETResponse({})
    .subscribe(data => {
      console.log(data);
    });
  }

}
