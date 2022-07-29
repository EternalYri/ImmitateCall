import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEqual } from 'lodash';

// import { LoginModule } from './login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //перекинуть в сервис
  user = {
    login: 'Yuri',
    password: '12345678'
  }

  form!: FormGroup;

  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm()
    let users = JSON.stringify(this.user)
    localStorage.setItem('user', users)
  }
  onLogin() {

    const userData = this.form.getRawValue()
    console.log(userData)
    console.log(isEqual(userData, this.user))
  }

  initForm() {
    this.form= this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

}
