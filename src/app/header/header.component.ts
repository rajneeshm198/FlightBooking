import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;
  login: boolean = true;
  loggedInUserDetails: any = '';

  constructor (
    private router: Router,
    private _authenticateSerivce: AuthenticateService
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.login= true;
        } else {
          this.loggedInUserDetails = this._authenticateSerivce.loggedInUserDetails || JSON.parse(sessionStorage.getItem('userDetails') || '');
          this.login= false;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  showMenuHandler(val: boolean) {
    this.showMenu = val;
  }

  logoutUser() {
    sessionStorage.setItem('userDetails', '');
  }

}
