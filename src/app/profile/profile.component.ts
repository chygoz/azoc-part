import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadphotoComponent } from '../uploadphoto/uploadphoto.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData;
  userForm: FormGroup;
  constructor(public dialog: MatDialog, private service: AppService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.userData = JSON.parse(localStorage.getItem('userData'))
    this.userForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postal_code: ['', [Validators.required]]
    })
    this.getUserData();
  }

  getUserData() {
    this.service.getUserdata({}).subscribe((resp) => {
      if (resp.status) {
        this.userData = resp.data;
        this.userForm.patchValue(this.userData)
      }
    })
  }

  uploadphotoDialog() {
    let dialogRef = this.dialog.open(UploadphotoComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }
  changepasswordDialog() {
    let dialogRef = this.dialog.open(ChangepasswordComponent,
      { panelClass: 'my-full-screen-dialog', width: '600px', });

    dialogRef.afterClosed().subscribe(() => {
    })
  }

  onSubmit() {
    this.service.updateUserdata(this.userForm.value).subscribe((resp) => {
      if (resp.status) {
        console.log("updated sucessfully")
      } else {
        console.log("something went wrong")
      }
    })
  }

}
