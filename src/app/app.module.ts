import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AdminModule } from './admin/admin.module';
import { LayoutComponent } from './user/components/layout/layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from './user/components/chat/chat.component';
import { TreatmentComponent } from './user/components/treatment/treatment.component';
import { PressureComponent } from './user/components/pressure/pressure.component';
import { MessageComponent } from './user/components/chat/message/message.component';
import {CommonModule} from "@angular/common";
import {AuthService} from "./shared/services/auth.service";
import { NavbarComponent } from './user/components/navbar/navbar.component';

export function initFactory(authService: AuthService): () => Promise<any> {
  return (): Promise<any> => {
    return authService.initUser$().toPromise();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChatComponent,
    TreatmentComponent,
    PressureComponent,
    MessageComponent,
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
    MatIconModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [AuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
