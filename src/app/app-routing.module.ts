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
import {LoginFormComponent} from "./shared/components/login-form/login-form.component";
import {LoginComponent} from "./shared/components/login/login.component";
import {RegisterComponent} from "./shared/components/register/register.component";
import {UserLoginComponent} from "./user/components/user-login/user-login.component";
import {UserRegisterComponent} from "./user/components/user-register/user-register.component";
import {AdminGuard} from "./admin/services/admin.guard";
import {UserGuard} from "./user/services/user.guard";

const routes: Routes = [
  { path: 'login-admin', component: LoginComponent },
  { path: 'register-admin', component: RegisterComponent },
  { path: 'login-user', component: UserLoginComponent },
  { path: 'register-user', component: UserRegisterComponent },
  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [AdminGuard],  children: [
      { path: 'patients', component: PatientsListLayoutComponent, canActivate: [ AdminGuard ] },
      { path: 'patients/:id', component: PacientDashboardLayoutComponent, canActivate: [ AdminGuard ] },
      { path: 'chat/:patientId', component: AdminChatLayoutComponent, canActivate: [ AdminGuard ] },
    ]
  },
  {
    path: 'user', component: LayoutComponent, canActivate: [ UserGuard ], children: [
      { path: 'chat', component: ChatComponent, canActivate: [ UserGuard ] },
      { path: 'pressure', component: PressureComponent, canActivate: [ UserGuard ] },
      { path: 'treatment', component: TreatmentComponent, canActivate: [ UserGuard ] },
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
