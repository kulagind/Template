import { Component, Inject, Input, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() public value: string;

  constructor(@Inject(RouterLinkActive) public activeRouter: RouterLinkActive) { }

  public ngOnInit(): void {}

}
