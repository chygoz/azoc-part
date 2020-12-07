import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData;
  subscription;
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.service.getMonthlyCommitment({}).subscribe((resp) => {
      if(resp.status) {
        this.subscription = resp.data;
      }
    })
  }

}
