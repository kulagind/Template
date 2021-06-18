import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {Chart, ChartConfiguration} from "chart.js";
import {Gradient} from "../../classes/gradient.class";


@Component({
  selector: 'app-patient-chart-statistic',
  templateUrl: './patient-chart-statistic.component.html',
  styleUrls: ['./patient-chart-statistic.component.scss']
})
export class PatientChartStatisticComponent implements OnInit, AfterViewInit {

  private chart: any;
  private readonly gradient: Gradient;

  constructor(private readonly renderer: Renderer2) {
    this.gradient = new Gradient(renderer);
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.init();
  }

  private init(): void {

    const labels = [
      '',
      '',
      '',
      '',
      '',
      '',
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: this.gradient.getGradient(),
          borderColor: 'rgba(255, 255, 255, 0)',
          data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
          label: 'My First dataset',
          backgroundColor: this.gradient.getGradient(),
          borderColor: 'rgba(255, 255, 255, 0)',
          data: [5, 8, 23, 12, 20, 30, 55],
        }
      ]
    };

    const config: ChartConfiguration = {
      type: 'line',
      data,
      options: {
        responsive: false,
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 5
          },
        },
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
          }],
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
          }]
        },
      }
    };

    const canvas: any = document.getElementById('chart');
    this.chart = new Chart(canvas, config);
  }

}
