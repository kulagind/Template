import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { complexSidenavAnimation } from './sidebar.animation';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import {AdminService} from "../../../../services/admin.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [...complexSidenavAnimation()]
})
export class SidebarComponent implements OnInit {

  public profileAnimationTrigger$ = new BehaviorSubject(true)
    .pipe(
      delay(0)
    );

  constructor(private readonly adminService: AdminService) { }

  public ngOnInit(): void { }

  public handleLogout(): void {
    this.adminService.logout();
  }

}
