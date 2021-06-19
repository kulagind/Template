import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public formGroup = new FormGroup({
    snils: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private readonly loginService: LoginServiceService,
    private readonly userService: UserService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loginService
      .login(this.formGroup.value)
      .pipe(
        filter(value => !!value)
      )
      .subscribe((value) => {
        console.log(value)
        this.userService.token = value;
        this.router.navigate(['user']);
      })
  }
}
