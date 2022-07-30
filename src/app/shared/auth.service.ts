import { Injectable, OnInit } from "@angular/core";
import { isEqual } from "lodash";

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit{
  flag = false;

  user = {
    "login": 'Yuri',
    "password": '12345678'
  }
  onAuth(form: any) {
    if (isEqual(this.user, form)) {
      this.flag = true
    } else this.flag = false
  }

  ngOnInit() {
    let users = JSON.stringify(this.user)
    localStorage.setItem('user', users)
  }

}
