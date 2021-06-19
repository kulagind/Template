import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushSubscriptionService {

  private api = '/api2/subscription';

  constructor(
    private http: HttpClient,
  ) { }

  public createSub(subscription: any): Observable<any> {
    return this.http.post(this.api, subscription);
  }
}
