import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: AppService,
    public dialog: MatDialog, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit(){
    this.service.login(this.loginForm.value).subscribe((resp) => {
      console.log(resp);
    })
  }

}
