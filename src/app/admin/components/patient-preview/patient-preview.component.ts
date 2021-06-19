import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../types/patient.type";

@Component({
  selector: 'app-patient-preview',
  templateUrl: './patient-preview.component.html',
  styleUrls: ['./patient-preview.component.scss']
})
export class PatientPreviewComponent implements OnInit {

  @Input()
  public patient: Patient | any

  constructor() { }

  public ngOnInit(): void {
  }

}
