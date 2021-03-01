import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  @Input() showBookingForm: boolean;
  @Output() hideFlightBookForm = new EventEmitter<boolean>();
  constructor() {
    this.showBookingForm = false;
   }

  ngOnInit(): void {
  }

  hideFlightBookFormHandler() {
    this.hideFlightBookForm.emit(false);
  }

}
