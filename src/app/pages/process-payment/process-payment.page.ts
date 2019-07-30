import { CommandResourceService } from 'src/app/api/services';
import { ToastController, LoadingController, PopoverController, NavController } from '@ionic/angular';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

declare var RazorpayCheckout;


@Component({
  selector: 'app-process-payment',
  templateUrl: './process-payment.page.html',
  styleUrls: ['./process-payment.page.scss'],
})
export class ProcessPaymentPage implements OnInit {
  toBePaid;
  paymentMethod;
  constructor(private dataService: DataService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private commandService: CommandResourceService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.toBePaid = this.dataService.doctor.paymentSettings.amount;
    console.log('Payment method is ' + this.paymentMethod);
    console.log('Amount is ' + this.toBePaid);
    console.log('Task id is ' + this.dataService.nextTaskId);
     if (this.paymentMethod === 'poc') {
      console.log('POC  option ');
      this.payOnConsultation();
    } else {
      this.presentLoadingWithOptions();
      console.log('Razorpay payment ');
      this.payWithRazorPay();
    }
  }
  processPayment() {
    this.commandService.createProcessPaymentUsingPOST({taskId: this.dataService.nextTaskId,
      processPayment: {paymentStatus: 'successfull'}}).subscribe(response => {
        this.dataService.nextTaskId = response.nextTaskId;
        console.log('TaskId is ' + response.nextTaskId + 'Task Name is ' + response.taskName);
          this.navCtrl.navigateForward('additional-consultation-info');
      });
  }
  payOnConsultation() {

  }
  payWithRazorPay() {
    const intNumber = Math.trunc(this.toBePaid);
    const fractNumber = this.toBePaid % 1;
    const amount = intNumber * 100 + Math.round(fractNumber);
    console.log(
      'Amount in paisa is ' +
        amount +
        ' int number is ' +
        intNumber +
        ' fract number is ' +
        fractNumber
    );
    this.commandService.
    createOrderPaymentUsingPOST({
        amount,
        currency: 'INR',
        payment_capture: 1,
        receipt: 'receipt12340'
      })
      .subscribe(response => {
        console.log('Response is orde id ' + response.id);
        const options = {
          description: 'Graeshoppe Payment',
          currency: 'INR',
          key: 'rzp_test_nYbfvOn43G0awI',
          order_id: response.id,
          amount,
          external: {
            wallets: ['paytm', 'citrus']
          },
          name: 'Graeshoppe',
          prefill: {
            email: 'pranav@razorpay.com',
            contact: '8879524924',
            name: 'Pranav Gupta',
            method: this.paymentMethod
          }
        };

        // tslint:disable-next-line: only-arrow-functions
        const successCallback = function(success, _this) {
          console.log('payment_id: ' + success.razorpay_payment_id);
          const orderId = success.razorpay_order_id;
          const signature = success.razorpay_signature;
          _this.paymentId = success.razorpay_payment_id;
          _this.state = success.razorpay_state;
          console.log('State is', success.razorpay_state);
          // _this.makePayment(success.razorpay_payment_id);
          // console.log(
          //   'Payment id in callback function ' +
          //     _this.paymentId +
          //     ' status is ' +
          //     _this.state
          // );
          _this.processPayment();
          _this.presentLoadingRedirecting();

        };

        const cancelCallback = function(error) {
          alert(error.description + ' (Error ' + error.code + ')');
        };

        RazorpayCheckout.on('payment.success', success => {
          successCallback(success, this);
        });
        RazorpayCheckout.on('payment.cancel', cancelCallback);
        RazorpayCheckout.open(options);
      });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      duration: 2000,
      message: 'Please wait...',
      translucent: true
    });
    return await loading.present();
  }

  async presentLoadingRedirecting() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      duration: 5000,
      message: 'Redirecting...',
      translucent: true
    });
    return await loading.present();
  }

}
