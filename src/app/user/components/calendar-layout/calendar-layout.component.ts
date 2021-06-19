import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {MatDialog} from "@angular/material/dialog";
import {CalendarTimepickerComponent} from "../calendar-timepicker/calendar-timepicker.component";

@Component({
  selector: 'app-calendar-layout',
  templateUrl: './calendar-layout.component.html',
  styleUrls: ['./calendar-layout.component.scss']
})
export class CalendarLayoutComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    locale: 'ru',
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: '20:00, Давление', date: '2021-06-19' },
      { title: '20:00, Давление', date: '2021-06-18' }
    ]
  };

  constructor(private readonly dialog: MatDialog) { }

  public ngOnInit(): void {

  }

  public handleDateClick(arg): void {
    this.dialog.open(CalendarTimepickerComponent)
      .afterClosed()
      .subscribe(value => {
        console.log(value)
      })
  }

}
