import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from '../models/newUser';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errroMessage:string=''

  form:FormGroup = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email:new FormControl(''),
      phno:new FormControl(''),
      password:new FormControl(''),
      cpassword:new FormControl('')
   })
   submitted=false;

//   newuser:NewUser=new NewUser();


  constructor(private servicesService:ServicesService ,private router:Router,private formBuilder:FormBuilder) { }
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email: ['', Validators.required],
      phno:['',Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    }); 
  }

  signup(){
    // alert('User Created')
    console.log(this.form.value);
    this.servicesService.signupUser(this.form.value).subscribe(data=>{
      alert("User Created")
      this.router.navigate(['userlogin'])
    },error=>alert("Email Already Exists"));
}

}
