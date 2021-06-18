import {Injectable} from "@angular/core";
import {Observable, of, ReplaySubject} from "rxjs";
import {User} from "../interfaces/user";
import {USER} from "../mocks/user";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: ReplaySubject<User> = new ReplaySubject<User>(1);
  private _id: number | string = '';

  constructor(
    private router: Router,
  ) {
  }

  setUser(user: User): void {
    this._id = user?.id;
    this.user.next(user);
  }

  get user$(): Observable<User> {
    return this.user.asObservable();
  }

  /**
   * TODO Add real user request
   * */
  initUser$(): Observable<void | User> {
    return of(USER).pipe(
      tap(user => {
        this.setUser(user);
      })
    );
  }

  get id(): string | number {
    return this._id;
  }

  isAuthenticated(): boolean {
    if (this.id) {
      return true;
    }
    return false;
  }
}
