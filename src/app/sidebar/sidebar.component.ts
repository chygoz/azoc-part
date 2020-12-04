import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userData;
  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'))
  }

}
