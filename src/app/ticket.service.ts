import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }


  getdetails():Observable<ticket[]>{
   
    return this.http.get<ticket[]>("./assets/ticketrequest.json");
  }
}
