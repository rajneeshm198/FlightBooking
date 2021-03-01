import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showFlights: boolean = false;
  fromDestination: string = 'From';
  toDestination: string = 'To';

  constructor() { }

  ngOnInit(): void {
  }

  showFlightsHandler(show: boolean) {
    this.showFlights = show;
  }

}
