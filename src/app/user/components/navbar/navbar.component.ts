import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PressureComponent} from "../pressure/pressure.component";
import {PressureFormComponent} from "../pressure-form/pressure-form.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public handleAddPressureButtonClick(): void {
    this.dialog.open(PressureFormComponent)

  }

}
