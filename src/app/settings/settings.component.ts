import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  subscriptionPlans;
  selectedPlan = 'CLASSIC';
  amount;
  currency = 'NGN';
  email;
  constructor(private service: AppService) {
    this.getSubscriptions();
   }

  ngOnInit(): void {
  }

  getSubscriptions(){
    this.service.getSubscriptions({}).subscribe((resp) => {
      console.log(resp);
      if(resp.status){
        this.subscriptionPlans = resp.data;
      }
    })
  }

  validateSubscription() {
    let selectedCurrency = this.subscriptionPlans.filter(sp => sp.currency_type == this.currency);
    for(let subs of selectedCurrency) {
      if(subs.range_to != 'Above'){
        if((Number(this.amount) >= Number(subs.range_from)) && (Number(this.amount) <= Number(subs.range_to))){
          this.selectedPlan = subs.plan_name;
          break;
        }
      }else {
        if((Number(this.amount) >= Number(subs.range_from))){
          this.selectedPlan = subs.plan_name;
          break;
        }
      }
      
    }

  }

}
