import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {filter, pluck, switchMap} from "rxjs/operators";
import {PatientsHttpService} from "../../services/patients-http.service";
import {firstScaleAppearance} from "./pacient-dashboard-layout.animation";

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

  constructor(private readonly router: ActivatedRoute, private readonly patientHttpService: PatientsHttpService) { }

  public ngOnInit(): void {
    this.listenRouter();
  }

  public listenRouter(): void {
    this.router.params
      .pipe(
        filter(value => !!value),
        pluck('id'),
        switchMap(value => {
          return this.patientHttpService.getMeasurements(value);
        })
      )
      .subscribe(value => {
        console.log(value)
      })
  }

}
