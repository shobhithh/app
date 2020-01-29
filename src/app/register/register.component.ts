import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm:FormGroup;
  submitted=false;
  

  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(){

    this.regForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',Validators.required],
      username:['',Validators.required] ,
      email:['',[Validators.required,Validators.email]],
      orgname:['',Validators.required]  ,
      pass:['',[Validators.required,Validators.minLength(5)]]        ,
      confpass:['',Validators.required]                          
    },{
      validators:this.MustMatch('pass','confpass')
    });
   

  }
  MustMatch(controlName:string,matchControlName:string)
  {
    return(FormGroup:FormGroup)=>
    {
      const control=FormGroup.controls[controlName];
      const matchcontrol=FormGroup.controls[matchControlName];
      if(matchcontrol.errors && !matchcontrol.errors.mustMatch){
        return;
      }
      if(control.value !== matchcontrol.value){
        matchcontrol.setErrors({mustMatch:true});
      }
      else{
        matchcontrol.setErrors(null);
      }
    }
  }

  goToRegister(registerpage:string)
  {
    this.router.navigate([`${registerpage}`])
  }
  onSubmit() {
    this.submitted = true;
    if (this.regForm.invalid) { 
      return;
    }
  }
  submit(username,password)
  {
  
    localStorage.setItem("username",JSON.stringify(username.value))
    localStorage.setItem("password",JSON.stringify(password.value))
  }
  get firstname(){
    return this.regForm.get('firstname');
  }
  get lastname(){
    return this.regForm.get('lastname');
  }
  get username(){
    return this.regForm.get('username');
  }
  get email(){
    return this.regForm.get('email');
  }
  get orgname(){
    return this.regForm.get('orgname');
  }
  get pass(){
    return this.regForm.get('pass');
  }
  get confpass(){
    return this.regForm.get('confpass');
  }
  }
  


