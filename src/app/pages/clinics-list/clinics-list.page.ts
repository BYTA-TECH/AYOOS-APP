import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.page.html',
  styleUrls: ['./clinics-list.page.scss'],
})
export class ClinicsListPage implements OnInit {

  searchterm='';
  searchChanged(){
    
  }

  constructor() { }

  ngOnInit() {
  }

}
