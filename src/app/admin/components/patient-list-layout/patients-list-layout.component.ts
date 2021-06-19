import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-patients-list-layout',
  templateUrl: './patients-list-layout.component.html',
  styleUrls: ['./patients-list-layout.component.scss']
})
export class PatientsListLayoutComponent implements OnInit {

  public searchContext$ = new BehaviorSubject('');

  constructor() { }

  public ngOnInit(): void {
  }

  public handleSearch(context: string): void {
    this.searchContext$.next(context);
  }

}
