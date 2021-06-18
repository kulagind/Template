import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {PAGES} from "../../mocks/pages";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public title: string = 'Главная';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.title = PAGES[window.location.pathname.split('/').pop()] || 'Главная'
    this.router.events.pipe(
      filter(events => (events instanceof NavigationEnd))
    ).subscribe(e => {
      const url = (e as NavigationEnd).url.split('/').pop() || '';
      // @ts-ignore
      this.title = PAGES[url] || 'Главная';
    });
  }

}
