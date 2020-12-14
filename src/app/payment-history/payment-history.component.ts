import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  transactions = [];
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(){
    this.service.getTransasctions({}).subscribe((resp) => {
      if(resp.status) {
        this.transactions = resp.data;
      }
    })
  }

}
