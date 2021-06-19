import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdminAuthHttpService} from "../../../admin/services/admin-auth-http.service";
import {Router} from "@angular/router";
import {AdminService} from "../../../admin/services/admin.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly adminService: AdminService,
    private readonly adminAuthService: AdminAuthHttpService,
    private readonly router: Router) {
    this.formGroup = formBuilder.group({
      login: '',
      password: '',
      firstName: '',
      lastName: '',
      department: ''
    });
  }

  public ngOnInit(): void {
  }

  public handleLoginButton(): void {
    this.adminAuthService
      .register(this.formGroup.value)
      .subscribe({
        next: (value) => {
          this.adminService.token = value;
          this.router.navigate(['admin/patients'])
        },
        error: () => {
          window.alert('erroe')
        }
      })
  }

  public handleExitButton(): void { }

}
