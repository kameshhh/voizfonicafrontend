import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private user=new BehaviorSubject<any>(localStorage.getItem('user'))
  constructor(private httpClient:HttpClient) { }
  
  login(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:8090/user/userlogin",user)
  }
  logout():Observable<any>{
    return this.httpClient.delete("http://localhost:8090/user/logout");
  }
  get currentUserName() 
    {
        return this.user.asObservable();
    }
}

