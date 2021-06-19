import { Component, OnInit } from '@angular/core';
import {PrivatePatientsHttpService} from "../../services/private-patients-http.service";
import {Patient} from "../../types/patient.type";
import {Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-private-patient-table-layout',
  templateUrl: './private-patient-table-layout.component.html',
  styleUrls: ['./private-patient-table-layout.component.scss']
})
export class PrivatePatientTableLayoutComponent implements OnInit {

  public patients: Patient[];

  constructor(private readonly privatePatientHttpService: PrivatePatientsHttpService, private readonly router: Router) { }

  public ngOnInit(): void {
    this.privatePatientHttpService.getPrivatePatients().subscribe(value => {
      this.patients = value;
    })
  }

  public handlePatientSelect(patient: Patient): void {
    this.router.navigate([`admin/patients/${patient.uid}`]);
  }

  public handleDeleteButton(id: string): void {
    this.privatePatientHttpService
      .deletePrivatePatient(id)
      .pipe(
        switchMap((_: any) => {
          return this.privatePatientHttpService.getPrivatePatients()
        })
      )
      .subscribe(patients => this.patients = patients);
  }

}
