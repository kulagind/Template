import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { PacientDashboardLayoutComponent } from './components/pacient-dashboard-layout/pacient-dashboard-layout.component';
import { PatientsListLayoutComponent } from './components/pacient-list-layout/patients-list-layout.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PatientsListComponent,
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
    RouterModule
  ],
  bootstrap: [ AdminLayoutComponent ],

})
export class AdminModule { }
