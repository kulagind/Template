import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {ChatComponent} from "./components/chat/chat.component";
import {MessageComponent} from "./components/chat/message/message.component";
import {AuthService} from "./services/auth.service";
import {MatIconModule} from "@angular/material/icon";

export function initFactory(authService: AuthService): () => Promise<any> {
  return (): Promise<any> => {
    return authService.initUser$().toPromise();
  }
}

@NgModule({
  declarations: [ChatComponent, MessageComponent],
    imports: [
        BrowserModule,
        CommonModule,
        MatIconModule,
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
    ChatComponent
  ]
})
export class SharedModule {
}
