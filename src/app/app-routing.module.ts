import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./admin/components/admin-layout/admin-layout.component";
import {PacientListLayoutComponent} from "./admin/components/pacient-list-layout/pacient-list-layout.component";
import {PacientDashboardLayoutComponent} from "./admin/components/pacient-dashboard-layout/pacient-dashboard-layout.component";
import {LayoutComponent} from "./user/components/layout/layout.component";
import {ChatComponent} from "./user/components/chat/chat.component";
import {TreatmentComponent} from "./user/components/treatment/treatment.component";
import {PressureComponent} from "./user/components/pressure/pressure.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'patients', component: PacientListLayoutComponent },
      { path: 'patients/:id', component: PacientDashboardLayoutComponent },
    ]
  },
  {
    path: 'user', component: LayoutComponent, children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
