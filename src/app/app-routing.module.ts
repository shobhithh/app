import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { TicketrequestsComponent } from './ticketrequests/ticketrequests.component';
import { NewticketComponent } from './newticket/newticket.component';
import { TicketIssueComponent } from './ticket-issue/ticket-issue.component';



const routes: Routes = [
  
  {
    path:'',
    component:LoginFormComponent
  },
  {
    path:'login',
    component:LoginFormComponent
  },
  {
    path:'forgot',
    component:ForgotPasswordComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'ticketrequest',
    component:TicketrequestsComponent
  },
  {
    path:'newticket',
    component:NewticketComponent
  },
  {
    path:'ticketissue',
    component:TicketIssueComponent
  }
]

  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
