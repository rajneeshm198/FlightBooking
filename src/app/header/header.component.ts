import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenuHandler() {
    this.showMenu = !this.showMenu;
  }

}
