import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedicineHttpService {

  private readonly api = 'api/'

  constructor(private readonly http: HttpClient) { }

  public getMedicine(id: string): Observable<any> {
    return this.http.get(`api/${id}/medicine/`);
  }

  public postMedicine(medicine: string, id: string): Observable<void> {
    return this.http.post<void>(`api/${id}/medicine/`, { medicine })
  }
}
