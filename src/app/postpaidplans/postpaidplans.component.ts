import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostpaidPlans } from '../models/postpaidPlans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-postpaidplans',
  templateUrl: './postpaidplans.component.html',
  styleUrls: ['./postpaidplans.component.css']
})
export class PostpaidplansComponent implements OnInit {

  postpaidplans:PostpaidPlans[]=[];
  constructor(public plansService:PlansService) { }

  ngOnInit(): void {
    this.plansService.getAllPostpaidPlans().subscribe((data:PostpaidPlans[])=>{
      this.postpaidplans=data;
    })
  }
  // deleteDetails(id:number){
  //   this.plansService.deletePostpaidPlan(id).subscribe(res=>{
  //     this.postpaidplans=this.postpaidplans.filter(post=>post.id!==id);
  //   })
  // }

}









