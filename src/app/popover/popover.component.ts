import { Component, OnInit, Input } from '@angular/core';
import { templateRefExtractor } from '@angular/core/src/render3';
import { interval } from 'rxjs';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {


 
  @Input() term:string;
  topDoctors: string[];
  
  
   assignValues(){
    
    console.log("In the async method popover ")
    this.topDoctors=[
      this.term,
      this.term
    ]
  }
  constructor() { 
     console.log("Term is "+this.term);
    //  interval(1000 * 1).subscribe(x => {
    //   this.assignValues();
    //   console.log("Inside interval  "+this.term);

    //  });
  }



  ngOnInit() {}

}
