import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../types/patient.type";

@Injectable({
  providedIn: 'root'
})
export class PatientsHttpService {

  private readonly api = 'api/patients/'

  constructor(private readonly http: HttpClient) { }

  public getPatients(): Observable<any> {
    return this.http.get<any>(this.api)
  }

  public getMeasurements(id: string): Observable<any> {
    return this.http.get(`api/measurements/${id}`);
  }
}
