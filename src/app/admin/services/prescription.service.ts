import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Prescription } from '../types/prescription.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private prescriptions$ = new BehaviorSubject<Prescription[]>(null);

  constructor(
    private http: HttpClient,
  ) { }

  public get prescriptions(): Observable<Prescription[]> {
    return this.prescriptions$.asObservable();
  }

  public update(patientUid: string): void {
    this.http.get<Prescription[]>(`/api/${patientUid}/prescription/`).subscribe(value => {
      this.prescriptions$.next(value);
    });
  }

  public create(patientUid: string, prescription: Prescription): void {
    this.http.post<Prescription>(`/api/${patientUid}/prescription/`, prescription)
      .subscribe(prescription => {
        this.updateWith(prescription);
      });
  }

  public delete(patientUid: string, id: string): void {
    this.http.delete(`/api/${patientUid}/prescription/${id}/`).subscribe(() => {
      let data = this.prescriptions$.value;
      data = data.filter(item => item.id == id);
      this.prescriptions$.next(data);
    });
  }

  public updatePrescription(patientId: string, prescription: Prescription): void {
    this.http.put<Prescription>(`/api/${patientId}/prescription/`, prescription).subscribe( prescription => {
      const data = this.prescriptions$.value;
      const index = data.findIndex(item => item.id == prescription.id);
      data[index] = {...data[index], ...prescription};
      this.prescriptions$.next(data);
    });
  }

  private updateWith(prescription: Prescription): void {
    const data = this.prescriptions$.value;
    console.log(data);
    data.push(prescription);
    this.prescriptions$.next(data);
  }

}
