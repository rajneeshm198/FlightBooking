import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  @Input() showBookingForm: boolean;
  constructor() {
    this.showBookingForm = false;
   }

  ngOnInit(): void {
  }

}
