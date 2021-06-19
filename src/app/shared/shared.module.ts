import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {ChatComponent} from "./components/chat/chat.component";
import {MessageComponent} from "./components/chat/message/message.component";
import {AuthService} from "./services/auth.service";
import {MatIconModule} from "@angular/material/icon";
import {OutlinedInputComponent} from "./components/outlined-input/outlined-input.component";
import {SideDecorationComponent} from "./components/side-decoration/side-decoration.component";
import {BaseHeaderComponent} from "./components/base-header/base-header.component";
import {LoginComponent} from "./components/login/login.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { RegisterComponent } from './components/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {RouterModule} from "@angular/router";

export function initFactory(authService: AuthService): () => Promise<any> {
  return (): Promise<any> => {
    return authService.initUser$().toPromise();
  }
}

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    OutlinedInputComponent,
    SideDecorationComponent,
    BaseHeaderComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [AuthService],
      multi: true
    }
  ],
  exports: [
    ChatComponent,
    OutlinedInputComponent,
    SideDecorationComponent
  ]
})
export class SharedModule {
}
