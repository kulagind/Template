import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import {AdminAuthHttpService} from "../../../admin/services/admin-auth-http.service";
import {AdminService} from "../../../admin/services/admin.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly adminAuthHttpService: AdminAuthHttpService,
    private readonly adminService: AdminService,
    private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      login: '',
      password: '',
    });
  }

  public ngOnInit(): void {
  }

  public handleLoginButton(): void {
    this.adminAuthHttpService
      .login(this.formGroup.value)
      .subscribe({
        next: (value) => {
          this.adminService.token = value;
          this.router.navigate(['/admin/patients'])
        },
        error: () => window.alert('Неверный логин или паоль')
      })
  }

  public handleExitButton(): void { }

}
