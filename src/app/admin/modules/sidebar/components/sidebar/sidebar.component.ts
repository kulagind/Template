import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { complexSidenavAnimation } from './sidebar.animation';
import {BehaviorSubject, Observable} from 'rxjs';
import { delay } from 'rxjs/operators';
import {AdminService} from "../../../../services/admin.service";
import {AdminAuthHttpService} from "../../../../services/admin-auth-http.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [...complexSidenavAnimation()]
})
export class SidebarComponent implements OnInit {

  public doctor$: Observable<any>;
  public profileAnimationTrigger$ = new BehaviorSubject(true)
    .pipe(
      delay(0)
    );

  constructor(private readonly adminService: AdminService, private readonly adminAuthHttpService: AdminAuthHttpService) { }

  public ngOnInit(): void {
    this.doctor$ = this.adminAuthHttpService
      .getAdmin(
        this.adminService.token
      )
  }

  public handleLogout(): void {
    this.adminService.logout();
  }

}
