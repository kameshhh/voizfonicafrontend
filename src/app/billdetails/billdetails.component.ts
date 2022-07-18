import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { DonglePlans } from '../models/donglePlans';
import { PaymentHistory } from '../models/paymentHistory';
import { PostpaidPlans } from '../models/postpaidPlans';
import { PrepaidPlans } from '../models/prepaidPlans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent implements OnInit {
  user!:any;
    id!:number;
    postpaidplans!:PostpaidPlans;
    // paymentHistory!:PaymentHistory;
    price!:string;
    validity!:string;
    description!:string;
    
      constructor(private loginStatusService:LoginstatusService,public plansService:PlansService,
        public route:ActivatedRoute) {

          this.loginStatusService.currentUserDetails.subscribe(res=>{
            console.log(res.email)
            this.user=res;
          })
         }
    
      ngOnInit(): void {
        this.id=this.route.snapshot.params['pid'];
        this.price=this.route.snapshot.params['pprice'];
        this.validity=this.route.snapshot.params['pvalidity'];
        this.description=this.route.snapshot.params['pdescription']
        this.plansService.readPostpaidPlanById(this.id).subscribe((data:PostpaidPlans)=>{
          this.postpaidplans=data;
          this.postpaidplans.email=this.user.email;
          this.postpaidplans.phno=this.user.phno;

          // this.paymentHistory=data;
          

        })
        this.plansService.readPrepaidPlanById(this.id).subscribe((data:PrepaidPlans)=>{
          this.postpaidplans=data;
          this.postpaidplans.email=this.user.email;
          this.postpaidplans.phno=this.user.phno;
          // this.paymentHistory=data;
          

        })
        this.plansService.readDonglePlanById(this.id).subscribe((data:DonglePlans)=>{
          this.postpaidplans=data;
          this.postpaidplans.email=this.user.email;
          this.postpaidplans.phno=this.user.phno;
          // this.paymentHistory=data;
          

        })
      }
    }
    