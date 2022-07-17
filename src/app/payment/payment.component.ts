import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginstatusService } from '../loginstatus.service';
import { PostpaidPlans } from '../models/postpaidPlans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user!:any
id!:number;
postpaidplans!:PostpaidPlans;
price!:string;
validity!:string;
description!:string;

// private user=new BehaviorSubject<any>(localStorage.getItem('user'))

  constructor(private loginStatusService:LoginstatusService,public plansService:PlansService,
    public route:ActivatedRoute) {
      this.loginStatusService.currentUserDetails.subscribe(res=>{
        console.log(res.email)
        this.user=res;
      })
     }

  ngOnInit(): void {
    // console.log(this.user)
    this.id=this.route.snapshot.params['pid'];
    this.price=this.route.snapshot.params['pprice'];
    this.validity=this.route.snapshot.params['pvalidity'];
    this.description=this.route.snapshot.params['pdescription']
    this.plansService.readPostpaidPlanById(this.id).subscribe((data:PostpaidPlans)=>{
      this.postpaidplans=data;
    })
    console.log(this.postpaidplans)
  }

  Payment(){
    console.log(this.user)
    
}

}