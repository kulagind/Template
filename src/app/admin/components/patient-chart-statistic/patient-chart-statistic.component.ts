import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-patient-chart-statistic',
  templateUrl: './patient-chart-statistic.component.html',
  styleUrls: ['./patient-chart-statistic.component.scss']
})
export class PatientChartStatisticComponent implements OnInit {

  private chart: any;
  public isCreate= false;

  constructor() { }

  ngOnInit() {
    if (!this.isCreate) {
      this.init();
    }
  }

  private init(): void {


    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const config: any = {
      type: 'line',
      data,
      options: {}
    };

    const canvas: any = document.getElementById('canvas');
    // this.chart = new Chart(canvas, config);
  }

}
