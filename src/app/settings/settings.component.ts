import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  subscribeForm: FormGroup
  constructor(private formBuilder: FormBuilder, private service: AppService) {
    this.getSubscriptions();
   }

  ngOnInit(): void {
    this.subscribeForm= this.formBuilder.group({
      monthly_commitment: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subscription_id: ['']
    })
  }

  getSubscriptions(){
    this.service.getSubscriptions({}).subscribe((resp) => {
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
          this.subscribeForm.controls['subscription_id'].setValue(subs._id);
          break;
        }
      }else {
        if((Number(this.amount) >= Number(subs.range_from))){
          this.selectedPlan = subs.plan_name;
          this.subscribeForm.controls['subscription_id'].setValue(subs._id);
          break;
        }
      }
      
    }

  }

  onSubmit(){
    console.log(this.subscribeForm.value);
    this.service.registerSubscription(this.subscribeForm.value).subscribe((resp) => {
      console.log(resp);
      if(resp.status){
        this.subscribeForm.reset();
        this.currency = 'NGN';
        this.subscribeForm.controls['currency'].setValue('NGN');
      }
    })
  }

}
