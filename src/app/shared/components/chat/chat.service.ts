import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Message } from '../../../user/interfaces/chat';
import { UserService } from '../../../user/services/user.service';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { AdminService } from '../../../admin/services/admin.service';
import { AdminAuthHttpService } from '../../../admin/services/admin-auth-http.service';

export interface Chat {
  messages: Message[];
  doctorId: string;
  patientId: string;
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messages: ReplaySubject<Message[]> = new ReplaySubject<Message[]>(1);
  public readonly chats$: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>([]);
  private userUid: string;
  private readonly doctorApi = '/api2/chat/doctor';
  private readonly patientApi = '/api2/chat/patient';
  private readonly chatApi = '/api2/chat';
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _status: 'idle' | 'fetched' = 'idle';
  isDoctor: boolean;
  interval: number;
  admin: any;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private adminService: AdminAuthHttpService,
  ) {
    this.userUid = userService.token;
    this.adminService.admin$.subscribe(admin => {
      this.admin = admin;
    });

  }

  stopUpdate(): void {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }

  setUpdate(): void {
    this.interval = window.setInterval(() => {
      this.fetchChats(this.isDoctor);
    }, 1000);
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
    if (this.admin) {
      message.author = this.admin.firstName + ' ' + this.admin.lastName;
    } else {
      message.author = 'Пользователь';
    }
    this.http.post<Message>(`${this.chatApi}/message/${chatId}`, message)
      .subscribe((message) => {
        // @ts-ignore
        // this.chats$.next(message);

        const data = this.chats$.value;
        // @ts-ignore
        const index = data.findIndex(chat => chat._id === message._id);

        // @ts-ignore
        data[index] = message;

        this.chats$.next(data);
      });
  }

  public fetchChats(isDoctor: boolean): void {
    this.isDoctor = isDoctor;
    this.loading.next(true);
    this.http.get<Chat[]>(`${isDoctor ? this.doctorApi : this.patientApi}`)
      .subscribe(chats => {
        this.loading.next(false);
        // @ts-ignore
        this.chats$.next(isDoctor ? chats : [chats]);
        this._status = 'fetched';
      });
  }

  private updateWithMessage(chatId: string, message: Message): void {
    const current = this.chats$.getValue();
    if (current?.length) {
      current.find(chat => chat.id == chatId)?.messages.push(message);
      this.chats$.next(current);
    }
  }

  public createChat(chatCreateDto: Chat): void {
    this.http.post<Chat>(this.chatApi + '/' + chatCreateDto.patientId, chatCreateDto)
      .subscribe(chat => {
        const data = this.chats$.value;
        data.push(chat);
        this.chats$.next(data);
      });
  }

}
