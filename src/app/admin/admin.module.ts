import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { PacientDashboardLayoutComponent } from './components/pacient-dashboard-layout/pacient-dashboard-layout.component';
import { PacientListLayoutComponent } from './components/pacient-list-layout/pacient-list-layout.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PatientsListComponent,
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PacientListLayoutComponent,
  ],
  exports: [
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PacientListLayoutComponent,
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
