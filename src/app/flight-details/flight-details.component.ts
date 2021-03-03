import { Component, Input, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flightLists: any[] = [];

  constructor(
    private _flightService: FlightService,
  ) { 
    const flightFilter = this._flightService.flightSearchFilter;
    this.fetchFlights(flightFilter);
  }

  ngOnInit(): void {
  }

  showFormHandler(val: boolean, index: number) {
    this.flightLists[index].selected = val;
    this.flightLists = this.flightLists.map((flight: any, i: number) => {
      if (index === i) {
        return flight;
      }
      return {
        ...flight,
        selected: false,
      }
    })
  }

  fetchFlights(filter: any) {
    if (!filter) {
      return;
    }
    this._flightService.fetchFlights().subscribe((res: any) => {
      const flights = res.filter((item: any) => {
        return item.fligt_departure_place === filter.from && item.fligt_arrival_place === filter.to;
      }).map((item: any) => {
        return {
          ...item,
          selected: false,
        }
      })
      this.flightLists = flights;
    })
  }

}
