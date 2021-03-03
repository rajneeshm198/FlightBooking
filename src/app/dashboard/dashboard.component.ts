import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from './../services/flight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showFlights: boolean = false;
  fromDestination: string = '';
  toDestination: string = '';

  constructor(
    private _route: Router,
    private _flightService: FlightService
  ) { }

  ngOnInit(): void {
  }

  showFlightsHandler(show: boolean) {
    this.showFlights = show;
  }
  
  showNormalFlights() {
    this.updateFlightFilter();
    this._route.navigateByUrl('/dashboard/search-flight/normal-booking');
  }

  showBusinessFlights() {
    this.updateFlightFilter();
    this._route.navigateByUrl('/dashboard/search-flight/business-booking');
  }

  updateFlightFilter() {
    const filter = {
      from: this.fromDestination,
      to: this.toDestination,
    }
    this._flightService.updateFlightSearchFilter(filter);
  }

}
