import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentHistory } from '../models/paymentHistory';
import { PaymenthistoryService } from '../paymenthistory.service';

@Component({
  selector: 'app-viewrechargehistory',
  templateUrl: './viewrechargehistory.component.html',
  styleUrls: ['./viewrechargehistory.component.css']
})
export class ViewrechargehistoryComponent implements OnInit {
  post:PaymentHistory[]=[];
  id!:number;
  // post!:PaymentHistory;
  email!:string;
  password!:string;
    constructor(public servicesService:PaymenthistoryService,
      public route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['pid'];
      this.email=this.route.snapshot.params['pemail'];
      // this.password=this.route.snapshot.params['ppassword']
      this.servicesService.readRechargeById(this.email).subscribe((data:PaymentHistory[])=>{
        this.post=data;
        console.log(this.email)
      })
    }
  
  }