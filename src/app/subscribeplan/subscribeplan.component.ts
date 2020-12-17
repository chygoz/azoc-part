import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-subscribeplan',
  templateUrl: './subscribeplan.component.html',
  styleUrls: ['./subscribeplan.component.scss']
})
export class SubscribeplanComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SubscribeplanComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialog.closeAll();
  }

}
