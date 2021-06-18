import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { PacientDashboardLayoutComponent } from './components/pacient-dashboard-layout/pacient-dashboard-layout.component';
import { PatientsListLayoutComponent } from './components/patient-list-layout/patients-list-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PatientsListLayoutComponent,
  ],
  exports: [
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PatientsListLayoutComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  bootstrap: [ AdminLayoutComponent ],

})
export class AdminModule { }
