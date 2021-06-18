import { Component, OnInit } from '@angular/core';
import {ChatService} from "./chat.service";
import {MESSAGES} from "../../mocks/messages";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  constructor(
    public chatService: ChatService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    /**
     * TODO change mocks messages to real
     * */
    this.chatService.setMessages(MESSAGES);
  }

}
