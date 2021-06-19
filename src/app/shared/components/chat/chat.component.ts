import { Component, OnInit } from '@angular/core';
import {ChatService} from "./chat.service";
import {MESSAGES} from "../../../user/mocks/messages";
import {AuthService} from "../../services/auth.service";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../../../user/interfaces/chat';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  public messages: Observable<Message[]>;

  constructor(
    public chatService: ChatService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    /**
     * TODO change mocks messages to real
     * */
    this.chatService.setMessages(MESSAGES);
    this.listenActivatedRoute();
  }

  listenActivatedRoute(): void {
    this.messages = this.activatedRoute.paramMap.pipe(
      tap((params) => {
        if (this.chatService.status === 'idle') {
          this.chatService.fetchChats(!!params.get('patientId'));
        }
      }),
      switchMap(params => {
        return this.chatService.getMessages(params.get('patientId'));
      })
    );
  }
}
