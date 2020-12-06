import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  status: boolean = false;
  clickEvent() {
    console.log("sadfss");
    this.status = !this.status;
  }
  ngOnInit(): void {

  }

}
