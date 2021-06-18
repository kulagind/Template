import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {SidebarModule} from "./modules/sidebar/sidebar.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {PacientDashboardLayoutComponent} from './components/pacient-dashboard-layout/pacient-dashboard-layout.component';
import {PacientListLayoutComponent} from './components/pacient-list-layout/pacient-list-layout.component';
import {PatientChartStatisticComponent} from './components/patient-chart-statistic/patient-chart-statistic.component';
import {PatientBarChartStatisticComponent} from './components/patient-bar-chart-statistic/patient-bar-chart-statistic.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PacientDashboardLayoutComponent,
    PacientListLayoutComponent,
    PatientChartStatisticComponent,
    PatientBarChartStatisticComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MatSidenavModule,
    RouterModule,
  ],
  bootstrap: [ AdminLayoutComponent ],

})
export class AdminModule { }
