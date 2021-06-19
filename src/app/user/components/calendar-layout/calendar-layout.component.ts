import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";

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

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
