import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {AdminModule} from './admin/admin.module';
import {LayoutComponent} from './user/components/layout/layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {TreatmentComponent} from './user/components/treatment/treatment.component';
import {PressureComponent} from './user/components/pressure/pressure.component';
import {CommonModule} from "@angular/common";
import {NavbarComponent} from './user/components/navbar/navbar.component';

import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TreatmentComponent,
    PressureComponent,
    NavbarComponent,
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
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
