import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export interface Notification {
  message: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly notifications$: BehaviorSubject<Notification[]>;

  constructor() {
    this.notifications$ = new BehaviorSubject<Notification[]>([]);
  }

  public push(notification: Notification): void {

    const notifications = [ ...this.notifications$.value ];
    notifications.push(notification);

    this.notifications$.next(
      notifications
    )
  }
}

window['sendMessage'] = async function(message, time): Promise<any> {
  return await fetch('/api2/message', {
    method: 'POST',
    body: JSON.stringify({
      message,
      time
    })
  });
}
