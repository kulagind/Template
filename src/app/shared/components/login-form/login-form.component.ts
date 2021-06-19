import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      login: '',
      password: '',
    });
  }

  public ngOnInit(): void {
  }

  public handleLoginButton(): void { }

  public handleExitButton(): void { }

}
