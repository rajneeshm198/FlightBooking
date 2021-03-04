import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  age: number | null = null;
  email: string = '';
  contactNumber: string = '';
  isBusiness: boolean = false;
  passengersCount: number = 1;
  bookingConfirmed: boolean = false;
  usersList: Array<any> = [];

  nameOnCard: string = '';
  cardNumber: number | null = null;
  expiryDate: string = '';
  cvv: number | null = null;

  @Input() showBookingForm: boolean;
  @Output() hideFlightBookForm = new EventEmitter<boolean>();
  constructor(
    private _userService: AuthenticateService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.showBookingForm = false;
    const userData = this._userService.loggedInUserDetails || JSON.parse(sessionStorage.getItem('userDetails') || '');
    this._activatedRoute.data.subscribe((data) => this.isBusiness = data.isBusiness );
    this.firstname = userData?.first_name;
    this.lastname = userData?.last_name;
    this.age = userData?.age;
    this.contactNumber = userData?.contactNumber;
    this.email = userData?.email;
   }

  ngOnInit(): void {
  }

  hideFlightBookFormHandler() {
    this.hideFlightBookForm.emit(false);
  }

  saveUser() {
    const user = {
      id: Math.ceil(Math.random() * 1000),
      first_name: this.firstname,
      last_name: this.lastname,
      age: this.age,
      email: this.email,
      contactNumber: this.contactNumber,
    }
    this._userService.saveUser(user).subscribe((res) => {
      this.usersList.push(res);
    })
  }

  handlePassengersCount(event: any) {
    this.passengersCount = event.target.value;
  }

  confirmBooking() {
    this.bookingConfirmed = true;
    this._route.navigateByUrl('/booking-confirmed')
  }

}
