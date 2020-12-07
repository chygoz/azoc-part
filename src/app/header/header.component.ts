import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData;
  constructor(private router: Router) { }
  status: boolean = false;
  clickEvent() {
    console.log("sadfss");
    this.status = !this.status;
  }
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'))
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
