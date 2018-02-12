import {AfterViewInit, Component} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-cb-count-graph',
  templateUrl: './cb-count-graph.component.html',
  styleUrls: ['./cb-count-graph.component.css']
})
export class CbCountGraphComponent implements AfterViewInit {

  canvas: any;
  ctx: any;

  ngAfterViewInit() {
    this.canvas = document.getElementById('cbCountChart');
    this.ctx = this.canvas.getContext('2d');
    let cbCountChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['Experian', 'TransUnion', 'Equifax'],
        datasets: [{
          label: '# of Pulls',
          data: [5873, 684, 2246],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        display: true,
        maintainAspectRatio: false
      }
    });
  }

}
