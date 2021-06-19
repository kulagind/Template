import { Component, OnInit } from '@angular/core';
import {AdminAuthHttpService} from "../../../admin/services/admin-auth-http.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../../admin/services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public readonly formGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private readonly router: Router,
    private readonly adminAuthHttpService: AdminAuthHttpService,
    private readonly adminService: AdminService) { }

  public ngOnInit(): void {
  }

  public submit(): void {
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

}
