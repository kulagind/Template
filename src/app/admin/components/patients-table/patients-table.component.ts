import { Component, OnInit } from '@angular/core';
import { Patient } from '../../types/patient.type';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.scss']
})
export class PatientsTableComponent implements OnInit {

  public patients: Patient[] = [
    {
      uid: '1',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    },
    {
      uid: '1',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    },
    {
      uid: '1',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    },
    {
      uid: '1',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    },
    {
      uid: '1',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    }
  ]

  constructor() { }

  public ngOnInit(): void {
  }

}
