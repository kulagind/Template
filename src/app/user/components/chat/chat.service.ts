import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {Message} from "../../interfaces/chat";

@Injectable()
export class ChatService {
  private messages: ReplaySubject<Message[]> = new ReplaySubject<Message[]>(1);

  setMessages(messages: Message[]): void {
    this.messages.next(messages);
  }

  get messages$(): Observable<Message[]> {
    return this.messages.asObservable();
  }
}
