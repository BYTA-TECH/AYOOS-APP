import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-text-search',
  templateUrl: './full-text-search.page.html',
  styleUrls: ['./full-text-search.page.scss'],
})
export class FullTextSearchPage implements OnInit {

  constructor() { }

  searchTerm:string;
  searchChanged(){
    
  }
  ngOnInit() {
  }

}
