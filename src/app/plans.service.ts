import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlansService {



  constructor(private httpClient:HttpClient) { }

getAllPostpaidPlans():Observable<any>{
  return this.httpClient.get("http://localhost:8090/postpaid/allpostpaidplans");
}
readPostpaidPlanById(id:number):Observable<any>{
 return this.httpClient.get("http://localhost:8090/postpaid/postpaidplan/"+ id);
}

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
