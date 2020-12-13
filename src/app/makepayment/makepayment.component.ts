import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscribeplanComponent } from '../subscribeplan/subscribeplan.component';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {Moment} from 'moment';
@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.scss']
})
export class MakepaymentComponent implements OnInit {
  userData;
  subscription;
  amount;
  currency = [
    { value: 'NGN', label: 'Nigerian Naira' },
    { value: 'USD', label: 'Dollar' }
  ]
  subscribeForm: FormGroup
  selectedCurrency: any = [];
  date;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: AppService) { }


  subscribeplanDialog() {
    let dialogRef = this.dialog.open(SubscribeplanComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }

  ngOnInit(): void {
    this.subscribeForm = this.formBuilder.group({
      date: [_moment(), [Validators.required]],
      monthly_commitment: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subscription_id: ['']
    })
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.service.getMonthlyCommitment({}).subscribe((resp) => {
      if (resp.status) {
        this.subscription = resp.data;
        this.selectedCurrency = this.currency.filter(cur => cur.value == this.subscription.currency);
        console.log(this.selectedCurrency);
      }
    })
  }
  onSubmit() { }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.subscribeForm.get('date').value;
    console.log(ctrlValue);
    ctrlValue.year(normalizedYear.year());
    //this.date.setValue(ctrlValue);
    this.subscribeForm.controls['date'].setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.subscribeForm.get('date').value;
    ctrlValue.month(normalizedMonth.month());
    //this.date.setValue(ctrlValue);
    this.subscribeForm.controls['date'].setValue(ctrlValue);
    datepicker.close();
  }

}
