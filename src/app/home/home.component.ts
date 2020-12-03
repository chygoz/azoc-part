import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  loginDialog() {
    let dialogRef = this.dialog.open(LoginComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }
  registerDialog() {
    let dialogRef = this.dialog.open(SignupComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }



}
