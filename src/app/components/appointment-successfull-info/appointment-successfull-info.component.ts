import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-appointment-successfull-info',
  templateUrl: './appointment-successfull-info.component.html',
  styleUrls: ['./appointment-successfull-info.component.scss'],
})
export class AppointmentSuccessfullInfoComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    public dataService: DataService,
    private navCtrl: NavController) { }


  dismiss() {
    this.modalCtrl.dismiss();
    this.navCtrl.navigateForward('home');
  }

  ngOnInit() {}

}
