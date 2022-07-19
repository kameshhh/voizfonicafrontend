import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  posts:Post[]=[];
  constructor(public servicesService:ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getAll().subscribe((data:Post[])=>{
      this.posts=data;
    })
  }
  deleteDetails(id:number){
    this.servicesService.deleteDetails(id).subscribe(res=>{
      this.posts=this.posts.filter(post=>post.id!==id);
    })
  }

}