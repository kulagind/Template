import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PatientsHttpService} from "../../../admin/services/patients-http.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {

  public readonly formGroup = new FormGroup({
    lowerPoint: new FormControl(),
    upperPoint: new FormControl(),
    pulse: new FormControl()
  })

  constructor(private readonly patientHttpService: PatientsHttpService, private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.patientHttpService.sendMeasurements(
      this.userService.token,
      this.formGroup.value
    )
      .subscribe(() => {
        this.formGroup.reset();
      })
  }

}
