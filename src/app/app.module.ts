import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AdminModule } from './admin/admin.module';
import { LayoutComponent } from './user/components/layout/layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TreatmentComponent } from './user/components/treatment/treatment.component';
import { PressureComponent } from './user/components/pressure/pressure.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './user/components/navbar/navbar.component';

import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PressureFormComponent } from './user/components/pressure-form/pressure-form.component';
import { UserLoginComponent } from './user/components/user-login/user-login.component';
import { UserRegisterComponent } from './user/components/user-register/user-register.component';
import { environment } from '../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ParamInterceptor } from './shared/services/auth.interceptor';
import { CalendarLayoutComponent } from './user/components/calendar-layout/calendar-layout.component';
import {FullCalendarModule} from "@fullcalendar/angular";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarTimepickerComponent } from './user/components/calendar-timepicker/calendar-timepicker.component';
import {MatTimepickerModule} from "mat-timepicker";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TreatmentsListComponent } from './user/components/treatments-list/treatments-list.component';
import {MatOptionModule} from "@angular/material/core";

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TreatmentComponent,
    PressureComponent,
    NavbarComponent,
    PressureFormComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CalendarLayoutComponent,
    CalendarTimepickerComponent,
    TreatmentsListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AdminModule,
    MatTabsModule,
    MatIconModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FullCalendarModule,
    MatTimepickerModule,
    MatAutocompleteModule,
    MatOptionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
