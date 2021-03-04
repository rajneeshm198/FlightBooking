import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.css']
})
export class BookingConfirmedComponent implements OnInit {

  name: string = '';

  constructor(
    private _authenticatedService: AuthenticateService
  ) {
    const userData = this._authenticatedService.loggedInUserDetails || JSON.parse(sessionStorage.getItem('userDetails') || '');
    this.name = userData?.first_name + ' ' + userData?.last_name;
   }

  ngOnInit(): void {
  }

}
