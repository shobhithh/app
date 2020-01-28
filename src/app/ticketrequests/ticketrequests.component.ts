import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ticketrequests',
  templateUrl: './ticketrequests.component.html',
  styleUrls: ['./ticketrequests.component.css']
})

export class TicketrequestsComponent implements OnInit {
  tickets:ticket[];
  constructor(private ticket:TicketService,private router:Router) { }

  ngOnInit() {
    
    this.ticket.getdetails().subscribe(res=>{
     this.tickets = res;
      
  })

}

goToRegister(registerpage:string)
  {
    this.router.navigate([`${registerpage}`])
  }
}
