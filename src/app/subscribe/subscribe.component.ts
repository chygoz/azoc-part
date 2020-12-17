import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
//import {MD_DIALOG_DATA} from '@angular/material';
import { AppService } from '../app.service';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscriptionPlans;
  subscribeForm: FormGroup;
  amount;
  defCurrency = 'NGN';
  disableSubmit: boolean = true;
  constructor(private formBuilder: FormBuilder, private service: AppService, private router: Router,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getSubscriptions();
    this.subscribeForm = this.formBuilder.group({
      subscription_id: ['', [Validators.required, Validators.email]],
      currency: ['', [Validators.required]],
      monthly_commitment: ['', [Validators.required]],
      email: [''],
    })
  }

  getSubscriptions() {
    this.service.getSubscriptions({}).subscribe((resp) => {
      if (resp.status) {
        this.subscriptionPlans = resp.data;
      }
    })
  }

  currencyChange(event) {
    this.defCurrency = event;
    this.amountChangeFunction();
  }

  amountChange() {
    this.amountChangeFunction();
  }
  amountChangeFunction() {
    let selectedplan = this.subscriptionPlans.filter(sp => (sp.plan_name == this.data.plan) && (sp.currency_type == this.defCurrency));
    this.subscribeForm.controls['subscription_id'].setValue(selectedplan[0]._id);
    this.subscribeForm.controls['currency'].setValue(selectedplan[0].currency_type);
    if ((this.subscribeForm.get('monthly_commitment').value > Number(selectedplan[0].range_from)) &&
      (this.subscribeForm.get('monthly_commitment').value < Number(selectedplan[0].range_to))) {
      this.disableSubmit = false;
    } else {
      this.disableSubmit = true;
    }
  }

  onSubmit() {
    let token = localStorage.getItem('token');
    if (token) {
      let userData = JSON.parse(localStorage.getItem('userData'));
      console.log(userData);
      this.subscribeForm.controls['email'].setValue(userData.email);
      console.log(this.subscribeForm.value);
      this.service.registerSubscription(this.subscribeForm.value).subscribe((resp) => {
        console.log(resp);
        this.dialog.closeAll();
      })
    } else {
      //redirect to register page
      let id = new Date().getTime()
      localStorage.setItem('' + id, JSON.stringify(this.subscribeForm.value));
      this.router.navigate(['/signup', id]);
      this.dialog.closeAll();
    }
  }

  closeDialog() {


    this.dialog.closeAll();
  }



}
