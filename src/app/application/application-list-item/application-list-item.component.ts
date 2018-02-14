import {Component, Input, OnInit} from '@angular/core';
import {Application} from '../../shared/application.model';
import {ApplicationService} from '../application.service';

@Component({
  selector: '[appApplicationListItem]',
  templateUrl: './application-list-item.component.html',
  styleUrls: ['./application-list-item.component.css']
})
export class ApplicationListItemComponent implements OnInit {

  @Input() application: Application;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
  }

  onSelected() {
    this.applicationService.applicationSelected.emit(this.application);
  }

}
