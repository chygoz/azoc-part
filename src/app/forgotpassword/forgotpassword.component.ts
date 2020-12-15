import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup
  constructor(private formBuilder: FormBuilder, private service: AppService,
    public dialog: MatDialog, public dialogRef: MatDialogRef<ForgotpasswordComponent>) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    console.log(this.forgotPasswordForm.value);
    this.service.forgotPassword(this.forgotPasswordForm.value).subscribe((resp) => {
      if(resp.status){
        this.service.showSuccess = resp.msg;
        this.dialogRef.close();
      }else {
        this.service.showError = resp.msg;
      }
    })
  }

}
