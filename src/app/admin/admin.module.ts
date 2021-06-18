import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {SidebarComponent} from "./modules/sidebar/components/sidebar/sidebar.component";
import {SidebarModule} from "./modules/sidebar/sidebar.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import { PacientDashboardLayoutComponent } from './components/pacient-dashboard-layout/pacient-dashboard-layout.component';
import { PacientListLayoutComponent } from './components/pacient-list-layout/pacient-list-layout.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
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
