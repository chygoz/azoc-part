import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData;
  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

}
