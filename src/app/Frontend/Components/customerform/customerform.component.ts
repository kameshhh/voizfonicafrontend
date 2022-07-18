import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Complains } from 'src/app/models/complains';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
  complains:Complains=new Complains();


  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
  }

  contactus(){
    // alert('User Created')
    console.log(this.complains);
    this.servicesService.contactus(this.complains).subscribe(data=>{
      alert("You will be contacted soon!");
      
    },error=>alert("Complaint not submitted"));
  }
  
  }
  
