import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./admin/components/admin-layout/admin-layout.component";
import {PatientsListLayoutComponent} from "./admin/components/pacient-list-layout/patients-list-layout.component";
import {PacientDashboardLayoutComponent} from "./admin/components/pacient-dashboard-layout/pacient-dashboard-layout.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'patients', component: PatientsListLayoutComponent },
      { path: 'patients/:id', component: PacientDashboardLayoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
