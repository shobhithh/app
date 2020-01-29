import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {
logForm:FormGroup;
  submitted=false;
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit() {

   
  
    this.logForm = this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(5)]]
  })



}
checkvalid(username,password){
let a= JSON.parse(localStorage.getItem("username"));
let b= JSON.parse(localStorage.getItem("password"));

if(username==a&&password==b)
{
  this.router.navigateByUrl('ticketrequest')
}
else{
  this.router.navigateByUrl('/')
}
}
  


  goToRegister(registerpage:string)
  {
    this.router.navigate([`${registerpage}`])
  }
  onSubmit() {
    this.submitted = true;
    if (this.logForm.invalid) { 
      return;
    }
  }
  get email(){
    return this.logForm.get('email');
  }
  get password(){
    return this.logForm.get('password');
  }
  }
  
