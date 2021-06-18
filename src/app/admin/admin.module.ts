import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {SidebarComponent} from "./modules/sidebar/components/sidebar/sidebar.component";
import {SidebarModule} from "./modules/sidebar/sidebar.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AdminLayoutComponent,
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
