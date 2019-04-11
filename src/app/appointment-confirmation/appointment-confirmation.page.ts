import { Component, OnInit } from '@angular/core';
import {Slot} from './../Slot';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DOCTORS } from '../mock-doctors';
@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.page.html',
  styleUrls: ['./appointment-confirmation.page.scss'],
})
export class AppointmentConfirmationPage implements OnInit {

  slot:Slot;
  symptoms:string[]=[];
  selectedSymptoms:string[]=[];
  selectedSymptom:string;
  searchTerm:string;
  searchResults:string[]=[];
  previousDiagnostics:string[]=[];
  doctor:Doctor;
  constructor(private activatedRoute:ActivatedRoute) { }

  onSearch(ev:any){
    this.searchResults=[];
    this.symptoms.forEach(symptom=>
      {
        if(this.searchTerm.toUpperCase().includes(symptom.toUpperCase())){
         this.searchResults.push(symptom);
        }
      })
  }

  addSymptom(symptom:string){
    this.selectedSymptoms.push(symptom);
  }
  removeSymptom(symptom:string){
    let index=this.selectedSymptoms.indexOf(symptom);
    this.selectedSymptoms.splice(index,1);
  }
  ngOnInit() {
    this.slot=new Slot();
    this.slot.time=new Date();
    this.symptoms=["cough","sneeze","head ache","stomach ache","fracture","float","fever","vomit","cold","disease","illness","thyroid","spine","cord"];
    this.previousDiagnostics=["tumor","gyno","fever","cardiac","cancer","diabetic","sugar","cough"]
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    DOCTORS.forEach(doctor=>{
      if(doctor.id.toString()==id){
        this.doctor=doctor;
      }
    })
  }

}
