import { Component, OnInit } from '@angular/core';
import { PrepaidPlans } from '../models/prepaidPlans';
// import { PostpaidPlans } from '../models/postpaidPlans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-prepaidplans',
  templateUrl: './prepaidplans.component.html',
  styleUrls: ['./prepaidplans.component.css']
})
export class PrepaidplansComponent implements OnInit {

  prepaidplans:PrepaidPlans[]=[];


  constructor(public plansService:PlansService) { }

    ngOnInit(): void {
      this.plansService.getAllPrepaidPlans().subscribe((data:PrepaidPlans[])=>{
        this.prepaidplans=data;
      })
    }
  }

