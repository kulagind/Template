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
  public measurements: any[] = [];

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
  }

  private getData(): number[] {
    return this.measurements
      .map(value => {
        return value.lowerPoint
      })
  }

  public isStatus(): boolean {
    console.log(Math.random() >= 0.5)
    return Math.random() >= 0.5;
  }

  private init(): void {

    const minValues = this.getData();
    const maxData = this.measurements
      .map(value => {
        return value.upperPoint
      })

    const labels = this.measurements.map(value => value.date);
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Минимальное Давление',
          backgroundColor: this.gradient.getGradient(),
          borderColor: 'rgba(255, 255, 255, 0)',
          data: minValues,
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
