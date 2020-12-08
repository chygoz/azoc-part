import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscriptionplan = "pearl";
  userData;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  loginDialog() {
    let dialogRef = this.dialog.open(LoginComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }

  subscribeDialog() {
    let dialogRef = this.dialog.open(SubscribeComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }


  packageSelect(event, item) {
    this.subscriptionplan = item;
    console.log(item);
  }



}
