import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { PacientDashboardLayoutComponent } from './components/pacient-dashboard-layout/pacient-dashboard-layout.component';
import { PatientsListLayoutComponent } from './components/patient-list-layout/patients-list-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { PatientsListPaginatorComponent } from './components/patients-list-paginator/patients-list-paginator.component';
import { PatientsListPaginatorSliderComponent } from './components/patients-list-paginator-slider/patients-list-paginator-slider.component';
import { MatRippleModule } from '@angular/material/core';
import { PatientChartStatisticComponent } from './components/patient-chart-statistic/patient-chart-statistic.component';
import { PatientBarChartStatisticComponent } from './components/patient-bar-chart-statistic/patient-bar-chart-statistic.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PatientsListLayoutComponent,
    PatientsListPaginatorComponent,
    PatientsListPaginatorSliderComponent,
    PatientChartStatisticComponent,
    PatientBarChartStatisticComponent,
  ],
  exports: [
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PatientsListLayoutComponent,
    PatientChartStatisticComponent,
    PatientBarChartStatisticComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  bootstrap: [ AdminLayoutComponent ],

})
export class AdminModule { }
