import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  showBookingForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFormHandler(val: boolean) {
    this.showBookingForm = val;
  }

  hideBookingFormHandler(val: boolean) {
    this.showBookingForm = val;
  }

}
