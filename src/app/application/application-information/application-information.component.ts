import {Component, Input, OnInit} from '@angular/core';
import { Application } from '../../shared/application.model';
import {ApplicationService} from '../application.service';

@Component({
  selector: 'app-application-information',
  templateUrl: './application-information.component.html',
  styleUrls: ['./application-information.component.css'],
  providers: [ ApplicationService ]
})
export class ApplicationInformationComponent implements OnInit {

  @Input() selectedApplication: Application;
  readOnlyFlag = true;

  constructor(private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.applicationService.applicationSelected
      .subscribe(
        (application: Application) => {
          this.selectedApplication = application;
        }
      );
  }

  changeDataMode(event: Event) {
    this.readOnlyFlag = !this.readOnlyFlag;
  }
}
