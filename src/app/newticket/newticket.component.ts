import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.css']
})
export class NewticketComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
  }
  submit(problem)
  {
    console.log(problem)
  }

}
