import { Component, OnInit } from '@angular/core';
import {Patient} from "../../types/patient.type";
import {PrivatePatientsHttpService} from "../../services/private-patients-http.service";

@Component({
  selector: 'app-private-patient-table',
  templateUrl: './private-patient-table.component.html',
  styleUrls: ['./private-patient-table.component.scss']
})
export class PrivatePatientTableComponent implements OnInit {

  public patients: Patient[];

  constructor() { }

  public ngOnInit(): void {
    // this.privatePatientHttpService.getPrivatePatients().subscribe(value => {
    //   this.patients = value;
    // })
  }


}
