import {AfterViewInit, Component} from '@angular/core';
import * as Chart from 'chart.js';
import {ProductCountService} from './product-count.service';

@Component({
  selector: 'app-product-count-graph',
  templateUrl: './product-count-graph.component.html',
  styleUrls: [ './product-count-graph.component.css' ],
  providers: [ ProductCountService ]
})
export class ProductCountGraphComponent implements AfterViewInit {

  canvas: any;
  ctx: any;

  constructor(private productCountService: ProductCountService) {

  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('productCountChart');
    this.ctx = this.canvas.getContext('2d');
    let productCountChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.productCountService.productCountAxisData,
        datasets: [{
          label: 'Past Week Counts',
          data: this.productCountService.productCountData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          lineTension: 0.1
        }]
      },
      options: {
        display: true,
        maintainAspectRatio: false
      }
    });
  }

  getXAxisLabelsData() {
    return [];
  }

}
