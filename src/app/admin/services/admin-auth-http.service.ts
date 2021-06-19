import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthHttpService {

  private readonly apiAuth = 'api/auth/';
  private readonly apiRegistry = 'api/registry/';

  constructor(private readonly http: HttpClient) { }

  public login(options: any): Observable<string> {
    return this.http.post<string>(this.apiAuth, options);
  }

  public register(options: any): Observable<string> {
    return this.http.post<string>(this.apiRegistry, options);
  }

}
