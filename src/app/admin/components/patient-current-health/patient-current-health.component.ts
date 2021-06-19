import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-current-health',
  templateUrl: './patient-current-health.component.html',
  styleUrls: ['./patient-current-health.component.scss']
})
export class PatientCurrentHealthComponent implements OnInit {

  @Input()
  public measurements: any

  constructor() { }

  public ngOnInit(): void {
    console.log(this.measurements)
  }

}
