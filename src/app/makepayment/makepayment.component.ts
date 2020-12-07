import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.scss']
})
export class MakepaymentComponent implements OnInit {
  subscription;
  currency = [
    {value: 'NGN', label: 'Nigerian Naira'},
    {value: 'USD', label: 'Dollar'}
  ]
  selectedCurrency: any = [];
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getMonthlyCommitment({}).subscribe((resp) => {
      if(resp.status) {
        this.subscription = resp.data;
        this.selectedCurrency = this.currency.filter(cur => cur.value == this.subscription.currency);
        console.log(this.selectedCurrency);
      }
    })
  }

}
