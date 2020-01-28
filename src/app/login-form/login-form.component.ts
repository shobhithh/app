import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  

}

  goToRegister(registerpage:string)
  {
    this.router.navigate([`${registerpage}`])
  }
}
