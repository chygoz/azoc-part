import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData;
  constructor() { }
  status: boolean = false;
  clickEvent() {
    console.log("sadfss");
    this.status = !this.status;
  }
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'))
  }

}
