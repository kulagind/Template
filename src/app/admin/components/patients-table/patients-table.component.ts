import {Component, OnInit} from '@angular/core';
import {Patient} from '../../types/patient.type';
import {PatientsHttpService} from "../../services/patients-http.service";
import {Router, RouterOutlet} from "@angular/router";
import {PrivatePatientsHttpService} from "../../services/private-patients-http.service";
import {filter, flatMap, switchMap, toArray} from "rxjs/operators";
import {flatten} from "@angular/compiler";
import {of} from "rxjs";

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.scss']
})
export class PatientsTableComponent implements OnInit {

  public patients: Patient[];

  constructor(
    private readonly privatePatientHttpService: PrivatePatientsHttpService,
    private readonly patientsHttpService: PatientsHttpService, private readonly router: Router) {
    // this.patientsHttpService
    //   .getPatients()
    //   .subscribe(value => {
    //     this.patients = value;
    //   })
  }

  public ngOnInit(): void {

    this.privatePatientHttpService
      .getPrivatePatients()
      .pipe(
        switchMap(privatePatients => {
          return this.patientsHttpService
            .getPatients()
            .pipe(
              flatMap(items => of(...items)),
              filter(patient => {
                return !(privatePatients.map(v => v.uid).includes(patient.uid))
              }),
              toArray()
            )
        })
      )
      .subscribe(value => this.patients = value);

  }

  public handlePatientSelect(patient: Patient): void {
    this.router.navigate([`admin/patients/${patient.uid}`]);

  }

  public handlePatientAdd(id: string) {
    this.privatePatientHttpService
      .addPrivatePatient(id)
      .pipe(
        switchMap(() => {
          return this.privatePatientHttpService
            .getPrivatePatients()
            .pipe(
              switchMap(privatePatients => {
                return this.patientsHttpService
                  .getPatients()
                  .pipe(
                    flatMap(items => of(...items)),
                    filter(patient => {
                      return !(privatePatients.map(v => v.uid).includes(patient.uid))
                    }),
                    toArray()
                  )
              })
            )
        })
      )
      .subscribe(value => this.patients = value);
  }
}
