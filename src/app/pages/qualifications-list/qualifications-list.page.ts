import { FindAllDoctorsUsingGETParams } from './../../api/services/query-resource.service';
import { QueryResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualifications-list',
  templateUrl: './qualifications-list.page.html',
  styleUrls: ['./qualifications-list.page.scss'],
})
export class QualificationsListPage implements OnInit {



  qualifications: String[] = [];
  constructor(
    private queryResourceService: QueryResourceService
  ) { }

  ngOnInit() {
    this.getQualifications();
  }

  getQualifications() {
    this.queryResourceService.findAllQualificationUsingGET({})
    .subscribe(result => {
      console.log(result);
      this.qualifications = result;
    })
  }

  getQualificationViaSearch(
  }



}
