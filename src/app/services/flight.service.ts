import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseURL = 'http://localhost:7010/flights';
  flightSearchFilter: any = null;

  constructor(
    private http: HttpClient
  ) { }

  // Get method to fecth the details 
  fetchFlights() {
    return this.http.get
    (`${this.baseURL}/list`);         
  }

  updateFlightSearchFilter(filter: any) {
    this.flightSearchFilter = filter;
  }
}
