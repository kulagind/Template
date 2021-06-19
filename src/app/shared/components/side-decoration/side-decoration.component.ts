import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-decoration',
  templateUrl: './side-decoration.component.html',
  styleUrls: ['./side-decoration.component.scss']
})
export class SideDecorationComponent implements OnInit {

  @Input() public readonly withText = true;

  constructor() { }

  public ngOnInit(): void {
  }

}
