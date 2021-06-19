import { Component, OnInit } from '@angular/core';
import {MedicineHttpService} from "../../services/medicine-http.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-treatments-list',
  templateUrl: './treatments-list.component.html',
  styleUrls: ['./treatments-list.component.scss']
})
export class TreatmentsListComponent implements OnInit {

  public medicine: any[];

  constructor(
    private readonly userService: UserService,
    private readonly medicineHttpService: MedicineHttpService) { }

  public ngOnInit(): void {
    this.medicineHttpService
      .getMedicine(
        this.userService.token
      )
      .subscribe(value => this.medicine = value);
  }

}
