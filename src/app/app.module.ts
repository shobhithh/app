import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { TicketrequestsComponent } from './ticketrequests/ticketrequests.component';
import {DataTableModule} from 'ng-angular8-datatable';
import { NewticketComponent } from './newticket/newticket.component';
import { TicketIssueComponent } from './ticket-issue/ticket-issue.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    TicketrequestsComponent,
    NewticketComponent,
    TicketIssueComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    CKEditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





