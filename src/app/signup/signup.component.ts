import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: AppService,
    public dialog: MatDialog, public dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      fistname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    console.log(this.signForm.value);
    this.service.register(this.signForm.value).subscribe((resp) => {
      console.log(resp);
    })
  }


}
