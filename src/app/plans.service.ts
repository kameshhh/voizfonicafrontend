import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaymentHistory } from './models/paymentHistory';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private user=new BehaviorSubject<any>(localStorage.getItem('user'))



  constructor(private httpClient:HttpClient) { }

getAllPostpaidPlans():Observable<any>{
  return this.httpClient.get("http://localhost:8090/plans/allpostpaidplans");
}
readPostpaidPlanById(id:number):Observable<any>{
 return this.httpClient.get("http://localhost:8090/plans/postpaidplan/"+ id);
}

getAllPrepaidPlans():Observable<any>{
  return this.httpClient.get("http://localhost:8090/plans/allprepaidplans");
}

readPrepaidPlanById(id:number):Observable<any>{
  return this.httpClient.get("http://localhost:8090/plans/prepaidplan/"+ id);
 }


 getAllDonglePlans():Observable<any>{
  return this.httpClient.get("http://localhost:8090/plans/alldongleplans");
}

readDonglePlanById(id:number):Observable<any>{
  return this.httpClient.get("http://localhost:8090/plans/dongleplan/"+ id);
 }

postRecharge(paymentHistory:PaymentHistory):Observable<any>{
  return this.httpClient.post("http://localhost:8090/recharge/save",paymentHistory);
 }
//  postuser(user:User):Observable<any>{
//   return this.httpClient.post("http://localhost:8090/recharge/saveuser",user);
//  }



// paymentHistory(paymentHistory:PaymentHistory):Observable<any>{
//   return this.httpClient.post("http://localhost:8090/user/userlogin",paymentHistory)
// }
// update(id:number,post:Post):Observable<any>{
//  return this.httpClient.put("http://localhost:8080/userdetails/update/",post);
// }
// deleteDetails(id:number){
//  return this.httpClient.delete("http://localhost:8080/userdetails/delete/"+id);
// }

}
