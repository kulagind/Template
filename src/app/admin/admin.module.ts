import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {SidebarModule} from './modules/sidebar/sidebar.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';
import {PatientsTableComponent} from './components/patients-table/patients-table.component';
import {PacientDashboardLayoutComponent} from './components/pacient-dashboard-layout/pacient-dashboard-layout.component';
import {PatientsListLayoutComponent} from './components/patient-list-layout/patients-list-layout.component';
import {MatIconModule} from '@angular/material/icon';
import {PatientsListPaginatorComponent} from './components/patients-list-paginator/patients-list-paginator.component';
import {PatientsListPaginatorSliderComponent} from './components/patients-list-paginator-slider/patients-list-paginator-slider.component';
import {MatLineModule, MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {PatientChartStatisticComponent} from './components/patient-chart-statistic/patient-chart-statistic.component';
import {PatientBarChartStatisticComponent} from './components/patient-bar-chart-statistic/patient-bar-chart-statistic.component';
import {MatButtonModule} from '@angular/material/button';
import {PrescriptionWidgetComponent} from './components/prescription-widget/prescription-widget.component';
import {MatListModule} from '@angular/material/list';
import {PatientPreviewComponent} from './components/patient-preview/patient-preview.component';
import {AdminChatLayoutComponent} from './components/admin-chat-layout/admin-chat-layout.component';
import {SharedModule} from '../shared/shared.module';
import {PrescriptionEditDialogComponent} from './components/prescription-edit-dialog/prescription-edit-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {PatientCurrentHealthComponent} from './components/patient-current-health/patient-current-health.component';
import {ApplicantListSearchComponent} from "./components/applicant-list-search/applicant-list-search.component";
import { MiBandStepWidgetComponent } from './components/mi-band-step-widget/mi-band-step-widget.component';
import { PrivatePatientTableComponent } from './components/private-patient-table/private-patient-table.component';
import {PrivatePatientTableLayoutComponent} from "./components/private-patient-table-layout/private-patient-table-layout.component";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PatientsListLayoutComponent,
    PatientsListPaginatorComponent,
    PatientsListPaginatorSliderComponent,
    PatientChartStatisticComponent,
    PatientBarChartStatisticComponent,
    PrescriptionWidgetComponent,
    PatientPreviewComponent,
    AdminChatLayoutComponent,
    PrescriptionEditDialogComponent,
    PatientCurrentHealthComponent,
    ApplicantListSearchComponent,
    MiBandStepWidgetComponent,
    PrivatePatientTableLayoutComponent,
    PrivatePatientTableComponent,
  ],
  exports: [
    PatientsTableComponent,
    PacientDashboardLayoutComponent,
    PatientsListLayoutComponent,
    PatientChartStatisticComponent,
    PatientBarChartStatisticComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatListModule,
    MatLineModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [ AdminLayoutComponent ],

})
export class AdminModule { }
