import {AfterViewInit, Component, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {Chart, ChartConfiguration} from "chart.js";
import {Gradient} from "../../classes/gradient.class";


@Component({
  selector: 'app-patient-chart-statistic',
  templateUrl: './patient-chart-statistic.component.html',
  styleUrls: ['./patient-chart-statistic.component.scss']
})
export class PatientChartStatisticComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  public measurements: any[];

  private chart: any;
  private readonly gradient: Gradient;

  constructor(private readonly renderer: Renderer2) {
    this.gradient = new Gradient(renderer);
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.init()
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.init(),100)
  }

  private getData(): number[] {
    return this.measurements
      .map(value => {
        return value.lowerPoint
      })
  }

  private init(): void {

    const values = this.getData();

    const labels = Array(values.length).fill('')
    console.log(labels)
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Давление',
          backgroundColor: this.gradient.getGradient(),
          borderColor: 'rgba(255, 255, 255, 0)',
          data: this.getData(),
        },
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
