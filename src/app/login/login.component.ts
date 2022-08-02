import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  flag = this.auth.flag;

  constructor(public fb: FormBuilder, public auth: AuthService) {}
  ngOnInit(): void {
    this.initForm()
  }
  onLogin() {
    const userData = this.form.getRawValue()
    this.auth.onAuth(userData)
  }

  initForm() {
    this.form= this.fb.group({
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

}
