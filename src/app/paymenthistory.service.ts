import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymenthistoryService {
  // private paymentDetails=new BehaviorSubject<PaymentHistory>({price:'',validity:'',description:'',email:'',phno:''});
  // currentPaymentDetails=this.paymentDetails.asObservable();



  constructor() { }

  // changePaymentStatus(paymentDetails:PaymentHistory){
  //   this.paymentDetails.next(paymentDetails);
  
  //   console.log(this.paymentDetails);
  //   console.log(this.currentPaymentDetails)
  // }
}

