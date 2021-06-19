import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Message } from '../../../user/interfaces/chat';
import { UserService } from '../../../user/services/user.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Chat {
  messages: Message[];
  doctorId: string;
  patientId: string;
  id?: string;
}

@Injectable()
export class ChatService {
  private messages: ReplaySubject<Message[]> = new ReplaySubject<Message[]>(1);
  private readonly chats$: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>([]);
  private userUid: string;
  private readonly doctorApi = '/api2/chat/doctor';
  private readonly patientApi = '/api2/chat/patient';
  private readonly chatApi = '/api2/chat';
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _status: 'idle' | 'fetched' = 'idle';

  constructor(
    private userService: UserService,
    private http: HttpClient,
  ) {
    this.userUid = userService.token;
  }

  setMessages(messages: Message[]): void {
    this.messages.next(messages);
  }

  get messages$(): Observable<Message[]> {
    return this.messages.asObservable();
  }

  get status() {
    return this._status;
  }

  public postMessage(chatId: string, message: Message): void {
    this.http.post<Message>(`${this.chatApi}/message/${chatId}`, message)
      .subscribe((message) => {
        this.updateWithMessage(chatId, message);
      });
  }

  public fetchChats(isDoctor: boolean): void {
    this.loading.next(true);
    this.http.get<Chat[]>(`${isDoctor ? this.doctorApi : this.patientApi}`)
      .subscribe(chats => {
        this.loading.next(false);
        this.chats$.next(chats);
        this._status = 'fetched';
      });
  }

  public getMessages(patientId?: string): Observable<Message[]> {
    return this.chats$.pipe(
      map(chats => {
        if (patientId) {
          return chats.find(chat => chat.patientId === patientId)?.messages || [];
        } else {
          return chats[0].messages || [];
        }
      })
    );
  }

  private updateWithMessage(chatId: string, message: Message): void {
    const current = this.chats$.getValue();
    current.find(chat => chat.id == chatId)?.messages.push(message);
    this.chats$.next(current);
  }

}
