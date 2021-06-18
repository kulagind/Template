import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./admin/components/admin-layout/admin-layout.component";
import {PatientsListLayoutComponent} from "./admin/components/patient-list-layout/patients-list-layout.component";
import {PacientDashboardLayoutComponent} from "./admin/components/pacient-dashboard-layout/pacient-dashboard-layout.component";
import {LayoutComponent} from "./user/components/layout/layout.component";
import {TreatmentComponent} from "./user/components/treatment/treatment.component";
import {PressureComponent} from "./user/components/pressure/pressure.component";
import {AdminChatLayoutComponent} from "./admin/components/admin-chat-layout/admin-chat-layout.component";
import {ChatComponent} from "./shared/components/chat/chat.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'patients', component: PatientsListLayoutComponent },
      { path: 'patients/:id', component: PacientDashboardLayoutComponent },
      { path: 'chat/:patientId', component: AdminChatLayoutComponent }
    ]
  },
  {
    path: 'user', component: LayoutComponent, children: [
      { path: 'chat', component: ChatComponent },
      { path: 'pressure', component: PressureComponent },
      { path: 'treatment', component: TreatmentComponent },
      { path: '**', redirectTo: 'user' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
