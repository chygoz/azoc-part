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
<<<<<<< Updated upstream
  defCurrency = 'NGN';
=======
  currency = 'NGN';
  amount;
>>>>>>> Stashed changes
  disableSubmit: boolean = true;
  constructor(private formBuilder: FormBuilder, private service: AppService, private router: Router,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
<<<<<<< Updated upstream
    this.getSubscriptions();
    this.subscribeForm= this.formBuilder.group({
=======
    this.subscribeForm = this.formBuilder.group({
>>>>>>> Stashed changes
      subscription_id: ['', [Validators.required, Validators.email]],
      currency: ['', [Validators.required]],
      monthly_commitment: ['', [Validators.required]],
      email: [''],
    })
  }

<<<<<<< Updated upstream
  getSubscriptions(){
    console.log("called111")
=======
  getSubscriptions() {
>>>>>>> Stashed changes
    this.service.getSubscriptions({}).subscribe((resp) => {
      if (resp.status) {
        this.subscriptionPlans = resp.data;
      }
      console.log(this.subscriptionPlans)
    })
  }

  currencyChange(event) {
    console.log(event);
    this.defCurrency = event;
    this.amountChangeFunction();
  }

  amountChange() {
    this.amountChangeFunction();
  }
<<<<<<< Updated upstream
  amountChangeFunction(){
    let selectedplan = this.subscriptionPlans.filter(sp => (sp.plan_name == this.data.plan) && (sp.currency_type == this.defCurrency) );
    this.subscribeForm.controls['subscription_id'].setValue(selectedplan[0]._id);
    this.subscribeForm.controls['currency'].setValue(selectedplan[0].currency_type);
    if((this.subscribeForm.get('monthly_commitment').value > Number(selectedplan[0].range_from)) && 
    (this.subscribeForm.get('monthly_commitment').value < Number(selectedplan[0].range_to))){
=======
  amountChangeFunction() {
    let selectedplan = this.subscriptionPlans.filter(sp => (sp.plan_name == this.data.plan) && (sp.currency_type == this.currency));
    this.subscribeForm.controls['subscription_id'].setValue(selectedplan[0]._id);
    this.subscribeForm.controls['currency_type'].setValue(selectedplan[0].currency_type);
    if ((this.subscribeForm.get('monthly_commitment').value > Number(selectedplan[0].range_from)) &&
      (this.subscribeForm.get('monthly_commitment').value < Number(selectedplan[0].range_to))) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    }else {
      //redirect to register page
      let id = new Date().getTime()
      localStorage.setItem(''+id, JSON.stringify(this.subscribeForm.value));
      this.router.navigate(['/signup', id]);
      this.dialog.closeAll();
=======
    } else {
>>>>>>> Stashed changes

    }
  }



}
