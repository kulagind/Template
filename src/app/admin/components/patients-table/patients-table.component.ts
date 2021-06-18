import { Component, OnInit } from '@angular/core';
import { Patient } from '../../types/patient.type';
import {PatientsHttpService} from "../../services/patients-http.service";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.scss']
})
export class PatientsTableComponent implements OnInit {

  public patients: Patient[];

  constructor(private readonly patientsHttpService: PatientsHttpService, private readonly router: Router) {
    this.patientsHttpService.getPatients().subscribe(value => {
      this.patients = value;
    })
  }

  public ngOnInit(): void {
  }

  public handlePatientSelect(patient: Patient): void {
    this.router.navigate([`admin/patients/${patient.uid}`]);

  }
}
