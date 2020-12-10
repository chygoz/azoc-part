import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscriptionplan = "PEARL";
  userData;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: AppService) { }

  ngOnInit(): void {
  }

  loginDialog() {
    let dialogRef = this.dialog.open(LoginComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }

  forgotpasswordDialog() {
    let dialogRef = this.dialog.open(ForgotpasswordComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }

  subscribeDialog() {
    let dialogRef = this.dialog.open(SubscribeComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', data: {plan: this.subscriptionplan}});

    dialogRef.afterClosed().subscribe(() => {
    })
  }


  packageSelect(event, item) {
    this.subscriptionplan = item;
    console.log(item);
  }



}
