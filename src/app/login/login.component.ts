import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  loginSuccessful: boolean | null = null;
  failedMessage: string = '';

  constructor(
    private _authenticateSerivce: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log(this.username);
    console.log(this.password);
    this._authenticateSerivce.getUser(this.username).subscribe((res: any) => {
      console.log(res);
      if (this.password === res.password) {
        this.loginSuccessful = true;
        this.loginSuccessful = true;
        this.failedMessage = '';
        this.router.navigateByUrl('/dashboard');
      } else {
        this.loginSuccessful = false;
        this.failedMessage = 'Username or password not correct';
      }
    },
    (error) => {
      console.log(error);
      this.loginSuccessful = false;
      this.failedMessage = 'User does not exist. Please register';
    });
  }

}
