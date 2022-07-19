import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!:number;
  post!:Post;
  email!:string;
  password!:string;
    constructor(public servicesService:ServicesService,
      public route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['pid'];
      this.email=this.route.snapshot.params['pemail'];
      this.password=this.route.snapshot.params['ppassword']
      this.servicesService.readPostById(this.id).subscribe((data:Post)=>{
        this.post=data;
      })
    }
  
  }