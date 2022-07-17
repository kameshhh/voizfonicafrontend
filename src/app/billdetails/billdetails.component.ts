import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostpaidPlans } from '../models/postpaidPlans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent implements OnInit {
    id!:number;
    postpaidplans!:PostpaidPlans;
    price!:string;
    validity!:string;
    description!:string;
    
      constructor(public plansService:PlansService,
        public route:ActivatedRoute) { }
    
      ngOnInit(): void {
        this.id=this.route.snapshot.params['pid'];
        this.price=this.route.snapshot.params['pprice'];
        this.validity=this.route.snapshot.params['pvalidity'];
        this.description=this.route.snapshot.params['pdescription']
        this.plansService.readPostpaidPlanById(this.id).subscribe((data:PostpaidPlans)=>{
          this.postpaidplans=data;
        })
      }
    
    }