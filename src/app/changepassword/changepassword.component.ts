import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  passwordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: AppService,
    public dialog: MatDialog, public dialogRef: MatDialogRef<ChangepasswordComponent>) { }

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      old_password: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirm_password: ['', [Validators.required, Validators.minLength(3)]]
    }, { validator: this.passwordConfirming })
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirm_password').value) {
      return { invalid: true };
    }
  }

  onSubmit() {
    console.log(this.passwordForm.value);
    //this.service.

    this.service.changePassword(this.passwordForm.value).subscribe((resp) => {
      if (resp.status) {
        this.service.showSuccess(resp.msg);
        this.dialogRef.close();
      } else {
        this.service.showError(resp.msg);
      }
    })

  }
  closeDialog() {
    this.dialog.closeAll();
  }

}
