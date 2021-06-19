import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, flatMap, pluck, switchMap} from "rxjs/operators";
import {PatientsHttpService} from "../../services/patients-http.service";
import {firstScaleAppearance} from "./pacient-dashboard-layout.animation";
import {Observable} from "rxjs";
import {Patient} from "../../types/patient.type";

@Component({
  selector: 'app-pacient-dashboard-layout',
  templateUrl: './pacient-dashboard-layout.component.html',
  styleUrls: ['./pacient-dashboard-layout.component.scss'],
  animations: [
    firstScaleAppearance({
      name: 'scale',
      time: 350,
      target: '.dashboard-widget',
      delay: 50,
    })
  ]
})
export class PacientDashboardLayoutComponent implements OnInit {

  public patient$: Observable<Patient | any>;
  public measurement$: Observable<any>;

  constructor(private readonly router: ActivatedRoute, private readonly patientHttpService: PatientsHttpService) { }

  public ngOnInit(): void {
    this.listenRouter();
  }

  public listenRouter(): void {
    this.measurement$ = this.router.params
      .pipe(
        filter(value => !!value),
        pluck('id'),
        switchMap(value => {
          return this.patientHttpService.getMeasurements(value);
        })
      )

    this.patient$ = this.router.params
      .pipe(
        filter(value => !!value),
        pluck('id'),
        switchMap(value => {
          return this.patientHttpService.getPatients()
            .pipe(
              flatMap(value => value),
              // @ts-ignore
              filter(patient => patient.uid.toString() === value)
            );
        })
      )
  }

}
