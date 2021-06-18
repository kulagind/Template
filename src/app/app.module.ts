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
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
