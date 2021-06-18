import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {SidebarModule} from "./admin/modules/sidebar/sidebar.module";
import {AdminModule} from "./admin/admin.module";
import { LayoutComponent } from './user/components/layout/layout.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import { ChatComponent } from './user/components/chat/chat.component';
import { TreatmentComponent } from './user/components/treatment/treatment.component';
import { PressureComponent } from './user/components/pressure/pressure.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChatComponent,
    TreatmentComponent,
    PressureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AdminModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
