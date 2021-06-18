import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {filter, pluck} from "rxjs/operators";

@Component({
  selector: 'app-pacient-dashboard-layout',
  templateUrl: './pacient-dashboard-layout.component.html',
  styleUrls: ['./pacient-dashboard-layout.component.scss']
})
export class PacientDashboardLayoutComponent implements OnInit {

  constructor(private readonly routerOutlet: RouterOutlet, private readonly router: ActivatedRoute) { }

  public ngOnInit(): void {
    this.listenRouter();
  }

  public listenRouter(): void {
    this.router.params
      .pipe(
        filter(value => !!value),
        pluck('id')
      )
      .subscribe(value => {
        console.log(value)
      })
  }

}
