import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ticket-issue',
  templateUrl: './ticket-issue.component.html',
  styleUrls: ['./ticket-issue.component.css']
})
export class TicketIssueComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
  }

}
