import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymenthistoryService {
  // private paymentDetails=new BehaviorSubject<PaymentHistory>({price:'',validity:'',description:'',email:'',phno:''});
  // currentPaymentDetails=this.paymentDetails.asObservable();



  constructor(private httpClient:HttpClient) { }

  // changePaymentStatus(paymentDetails:PaymentHistory){
  //   this.paymentDetails.next(paymentDetails);
  
  //   console.log(this.paymentDetails);
  //   console.log(this.currentPaymentDetails)
  // }
  readRechargeById(email:string):Observable<any>{
    return this.httpClient.get("http://localhost:8090/recharge/userrechargebyemail/"+email);
    console.log(email)
  }
}

