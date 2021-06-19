import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "../../user/services/user.service";
import {AdminService} from "../../admin/services/admin.service";

@Injectable()
export class ParamInterceptor implements HttpInterceptor {

  constructor(private readonly userService: UserService, private readonly adminService: AdminService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (this.userService.token || this.adminService.token) {

      console.log(this.adminService.token)
      const uid = this.adminService.token ?? this.userService.token;

      const paramReq = req.clone({
        headers: req.headers.set(
          'X-AUTH',
          this.adminService.token ?? this.userService.token
        )
      });
      return next.handle(paramReq);

    } else {
      return next.handle(req);
    }


  }
}
