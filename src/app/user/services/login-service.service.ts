import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly api = 'api/patients/auth/'

  constructor(private readonly http: HttpClient) { }

  public login(options: any | {}): Observable<any> {
    return this.http.post<any>(this.api, options);
  }
}
