import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-calendar-timepicker',
  templateUrl: './calendar-timepicker.component.html',
  styleUrls: ['./calendar-timepicker.component.scss']
})
export class CalendarTimepickerComponent implements OnInit {
  private closeMessage: string;

  constructor(public dialogRef: MatDialogRef<CalendarTimepickerComponent>, ) { }

  ngOnInit(): void {
  }

  public timeChangeHandler($event: any): void {
    this.dialogRef.close($event);

  }
}
