import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PatientsListComponent,
    PatientsTableComponent
  ],
  exports: [
    PatientsTableComponent
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
