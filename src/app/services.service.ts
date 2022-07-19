import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complains } from './models/complains';
import { NewUser } from './models/newUser';
import { Post } from './models/post';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // private baseUrl="http://localhost:8090/user/login"
  constructor(private httpClient:HttpClient) { }

  // loginUser(user:User):Observable<object>{
  //   console.log(user)
  //   return this.httpClient.post("http://localhost:8090/user/userlogin",user);
  // }

  loginAdmin(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8090/user/adminlogin",user);
  }


  signupUser(newuser:NewUser):Observable<object>{
    console.log(newuser)
    return this.httpClient.post("http://localhost:8090/user/signup",newuser);

  }

  contactus(complains:Complains):Observable<object>{
    console.log(complains)
    return this.httpClient.post("http://localhost:8090/user/contactus",complains);

  }

  getAll():Observable<any>{
    return this.httpClient.get("http://localhost:8090/userdetails/alluserdetails");
  }
  readPostById(id:number):Observable<any>{
   return this.httpClient.get("http://localhost:8090/userdetails/getuserdetails/"+ id);
 }
 update(id:number,post:Post):Observable<any>{
   return this.httpClient.put("http://localhost:8090/userdetails/update/",post);
 }
 deleteDetails(id:number){
   return this.httpClient.delete("http://localhost:8090/userdetails/delete/"+id);
 }

}

