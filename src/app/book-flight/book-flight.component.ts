import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  name: string = '';
  age: number | null = null;
  email: string = '';
  contactNumber: string = '';
  isBusiness: boolean = false;
  passengersCount: number = 1;
  bookingConfirmed: boolean = false;
  usersList: Array<any> = [];

  @Input() showBookingForm: boolean;
  @Output() hideFlightBookForm = new EventEmitter<boolean>();
  constructor(
    private _userService: AuthenticateService,
    private _route: ActivatedRoute
  ) {
    this.showBookingForm = false;
    this._route.data.subscribe((data) => this.isBusiness = data.isBusiness );
   }

  ngOnInit(): void {
  }

  hideFlightBookFormHandler() {
    this.hideFlightBookForm.emit(false);
  }

  saveUser() {
    const user = {
      id: Math.ceil(Math.random() * 1000),
      first_name: this.name,
      last_name: this.name,
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
  }

}
