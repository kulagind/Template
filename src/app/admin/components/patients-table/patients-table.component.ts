import { Component, OnInit } from '@angular/core';
import { Patient } from '../../types/patient.type';
import {PatientsHttpService} from "../../services/patients-http.service";

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
      uid: '2',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    },
    {
      uid: '3',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    },
    {
      uid: '4',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    },
    {
      uid: '5',
      age: 24,
      email: 'sergeyrusakov1@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Rusakov',
      phoneNumber: '89824428864',
    }
  ]

  constructor(private readonly patientsHttpService: PatientsHttpService) {
    this.patientsHttpService.getPatients().subscribe(value => {
      console.log(value)
    })
  }

  public ngOnInit(): void {
  }

}
