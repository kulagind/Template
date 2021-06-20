import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthHttpService {

  private readonly apiAuth = 'api/auth/';
  private readonly apiRegistry = 'api/registry/';
  public admin$: BehaviorSubject<any>;

  constructor(private readonly http: HttpClient) {
    this.admin$ = new BehaviorSubject<any>(null);
  }

  public login(options: any): Observable<string> {
    return this.http.post<string>(this.apiAuth, options);
  }

  public register(options: any): Observable<string> {
    return this.http.post<string>(this.apiRegistry, options);
  }

  public getAdmin(id): Observable<any> {
    return this.http.get<any>(`api/doctors/${id}`).pipe(tap(admin => this.admin$.next(admin)));
  }

}
