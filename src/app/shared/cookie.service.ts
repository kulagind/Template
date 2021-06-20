import { Injectable } from '@angular/core';
import {Cookie} from "ng2-cookies/ng2-cookies";

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  getAuth(): string {
    return Cookie.get('id_token');
  }

  setAuth(value: string): void {
    Cookie.set('id_token', value, 100);
  }

  deleteAuth(): void {
    Cookie.delete('id_token');
  }
}
