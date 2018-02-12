import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-information',
  templateUrl: './application-information.component.html',
  styleUrls: ['./application-information.component.css']
})
export class ApplicationInformationComponent implements OnInit {

  readOnlyFlag = true;

  constructor() {
  }

  ngOnInit() {
  }

  changeDataMode(event: Event) {
    this.readOnlyFlag = !this.readOnlyFlag;
  }
}
