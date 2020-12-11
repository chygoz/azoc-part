import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscribeplanComponent } from '../subscribeplan/subscribeplan.component';
@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.scss']
})
export class MakepaymentComponent implements OnInit {
  userData;
  subscription;
  currency = [
    { value: 'NGN', label: 'Nigerian Naira' },
    { value: 'USD', label: 'Dollar' }
  ]
  selectedCurrency: any = [];
  constructor(public dialog: MatDialog, private service: AppService) { }


  subscribeplanDialog() {
    let dialogRef = this.dialog.open(SubscribeplanComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.service.getMonthlyCommitment({}).subscribe((resp) => {
      if (resp.status) {
        this.subscription = resp.data;
        this.selectedCurrency = this.currency.filter(cur => cur.value == this.subscription.currency);
        console.log(this.selectedCurrency);
      }
    })
  }

}
