import { AppointmentSuccessfullInfoComponent } from './../../components/appointment-successfull-info/appointment-successfull-info.component';
import { NavController, ModalController } from '@ionic/angular';
import { CommandResourceService } from 'src/app/api/services';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Syndrome } from 'src/app/api/models';

@Component({
  selector: 'app-additional-consultation-info',
  templateUrl: './additional-consultation-info.page.html',
  styleUrls: ['./additional-consultation-info.page.scss']
})
export class AdditionalConsultationInfoPage implements OnInit {
  symptoms: string[] = [];
  selectedSymptoms: Syndrome[] = [];
  selectedSymptom: string;
  searchTerm: string;
  searchResults: string[] = [];
  previousDiagnostics: string[] = [];
  height: number;
  weight: number;
  age: number;
  note: string;
  constructor(
    private dataService: DataService,
    private commandService: CommandResourceService,
    private modalCtrl: ModalController
  ) {}

  collectAdditionalDetails(decision: string) {
    if (decision === 'skip') {
      this.commandService
        .createAdditionalInformationRequestUsingPOST({
          taskId: this.dataService.nextTaskId,
          additionalInformationRequest: { decision: 'skip' }
        })
        .subscribe(response => {
          this.presentSuccessfullInfoModal();
        });
    } else if (decision === 'continue') {
      this.commandService
        .createAdditionalInformationRequestUsingPOST({
          taskId: this.dataService.nextTaskId,
          additionalInformationRequest: { decision: 'yes' }
        })
        .subscribe(response => {
          console.log('Tracking id is ' + this.dataService.trackingId);
          this.commandService.createCollectAdditionalDetailsUsingPOST({
            trackingId: this.dataService.trackingId,
            taskId: response.nextTaskId,
            consultationDetails: {
              age: this.age,
              height: this.height,
              weight: this.weight,
              symptoms: this.selectedSymptoms
            }
          }).subscribe( result => {
            this.presentSuccessfullInfoModal();
          });
        });
    }
  }

  async presentSuccessfullInfoModal() {
    const modal = await this.modalCtrl.create({
      component: AppointmentSuccessfullInfoComponent,
    });

    return await modal.present();
  }
  onSearch(ev: any) {
    this.searchResults = [];
    this.symptoms.forEach(symptom => {
      if (this.searchTerm.toUpperCase().includes(symptom.toUpperCase())) {
        this.searchResults.push(symptom);
      }
    });
  }

  addSymptom(symptom: string) {
    this.selectedSymptoms.push({
      symptomRef: symptom,
      numberOfDaysSuffering: '2'
    });
  }
  removeSymptom(symptom: string) {
    const index = this.selectedSymptoms.indexOf({
      symptomRef: symptom,
      numberOfDaysSuffering: '2'
    });
    this.selectedSymptoms.splice(index, 1);
  }

  ngOnInit() {
    this.symptoms = [
      'cough',
      'sneeze',
      'head ache',
      'stomach ache',
      'fracture',
      'float',
      'fever',
      'vomit',
      'cold',
      'disease',
      'illness',
      'thyroid',
      'spine',
      'cord'
    ];
    this.previousDiagnostics = [
      'tumor',
      'gyno',
      'fever',
      'cardiac',
      'cancer',
      'diabetic',
      'sugar',
      'cough'
    ];
  }
}
