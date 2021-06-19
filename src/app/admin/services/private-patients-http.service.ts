import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../types/patient.type";

@Injectable({
  providedIn: 'root'
})
export class PrivatePatientsHttpService {

  private readonly api = 'api/patients/private';

  constructor(private readonly http: HttpClient) { }

  public getPrivatePatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.api);
  }

  public addPrivatePatient(id: string): Observable<void> {
    return this.http.post<void>(`${this.api}/${id}/`, {});
  }

  public deletePrivatePatient(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}/`, {});
  }
}
