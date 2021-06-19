import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {CHAT_PAGE, PAGES} from "../../mocks/pages";
import { SwPush } from '@angular/service-worker';
import { environment } from '../../../../environments/environment';
import { PushSubscriptionService } from '../../services/push-subscription.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public title: string = 'Главная';
  public readonly CHAT = CHAT_PAGE;

  constructor(
    private router: Router,
    private swPush: SwPush,
    private pushSubService: PushSubscriptionService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.swPush.requestSubscription({
      serverPublicKey: environment.vapidPublicKey,
    }).then(sub => this.pushSubService.createSub(sub).subscribe());

    // @ts-ignore
    this.title = PAGES[window.location.pathname.split('/').pop()] || 'Главная';
    this.router.events.pipe(
      filter(events => (events instanceof NavigationEnd))
    ).subscribe(e => {
      const url = (e as NavigationEnd).url.split('/').pop() || '';
      // @ts-ignore
      this.title = PAGES[url] || 'Главная';
    });
  }

  handleClick(): void {
    this.http.get('/api/oauth2/').subscribe();
  }

}
