import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chat, ChatService } from './chat.service';
import {MESSAGES} from "../../../user/mocks/messages";
import {AuthService} from "../../services/auth.service";
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../../../user/interfaces/chat';
import { map, switchMap, tap } from 'rxjs/operators';
import { CookieService } from '../../cookie.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  public messages: Observable<Chat>;

  @ViewChild('messagesElem') messagesElem: ElementRef;

  patientId: string;

  public chat: Chat;

  constructor(
    public chatService: ChatService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private cuckoldService: CookieService,
  ) {
  }

  ngOnInit(): void {
    /**
     * TODO change mocks messages to real
     * */
    this.chatService.setMessages(MESSAGES);
    this.listenActivatedRoute();

    this.messages = this.chatService.chats$.pipe(
      map(chats => {
        if (this.patientId) {
          return chats.find(chat => chat.patientId === this.patientId);
        } else {
          return chats[0];
        }
      }),
      tap(chat => {
        this.chat = chat;
        if (this.messagesElem) {
          let div = document.getElementsByClassName("messages")[0];
          div.scrollTo(0, div.scrollHeight);
        }
      }),
    )

    this.chatService.setUpdate();
  }

  ngOnDestroy(): void {
    this.chatService.stopUpdate();
  }

  listenActivatedRoute(): void {
    this.activatedRoute.paramMap.pipe(
      tap((params) => {
        if (this.chatService.status === 'idle') {
          const id = params.get('patientId');
          if (id) {
            this.patientId = id;
          }
          this.chatService.fetchChats(!!params.get('patientId'));
        }
      })).subscribe();
  }

  sendMessage(content: string, element: HTMLInputElement): void {

    element.value = '';
    // @ts-ignore
    this.chatService.postMessage(this.chat._id, {
      author: 'Олежка',
      // @ts-ignore
      message: content,

    });
  }
}
