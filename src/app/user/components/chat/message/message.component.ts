import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../interfaces/chat";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() public message!: Message;
  @Input() public id!: string | number;

  constructor() { }

  ngOnInit(): void {
  }

}
