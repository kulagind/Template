import { Injectable } from '@angular/core';
import {CookieService} from "../../shared/cookie.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _token: string = '';

  constructor(private readonly cookie: CookieService) { }

  public set token(token: string) {
    this.cookie.setAuth(token);
    this._token = token;
  }

  public get token(): string {
    return this.cookie.getAuth();
  }

  public logout(): void {
    this.cookie.deleteAuth();
  }
}
