import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: LoginForm = new LoginForm();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  clickLogin() {
    this.route.navigate(['']);
  }
}

export class LoginForm {
  username: string;
  password: string;
  rememberMe: boolean;
  type: string[];
}
