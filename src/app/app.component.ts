import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public trigger$ = new BehaviorSubject(false)

  public readonly title = 'Template';

  public ngOnInit(): void {
    this.trigger$.next(true);
  }
}
