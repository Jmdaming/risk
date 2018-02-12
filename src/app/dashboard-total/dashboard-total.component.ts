import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-total',
  templateUrl: './dashboard-total.component.html',
  styleUrls: ['./dashboard-total.component.css']
})
export class DashboardTotalComponent implements OnInit {
  @Input() card_header: string;
  @Input() card_body: number;

  constructor() { }

  ngOnInit() {
  }

}
