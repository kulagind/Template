import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

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
