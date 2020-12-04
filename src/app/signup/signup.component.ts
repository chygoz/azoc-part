import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signForm: FormGroup;
  ErrText;
  constructor(private formBuilder: FormBuilder, private service: AppService,private router: Router) { }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      city: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.passwordConfirming})
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
  }

  onSubmit() {
    this.service.register(this.signForm.value).subscribe((resp) => {
      if(resp.status){
        localStorage.setItem('token', resp.token);
        localStorage.setItem('userData', JSON.stringify(resp.data));
        this.router.navigate(['/dashboard']);
      }else {
        this.ErrText = resp.msg;
      }
    })
  }


}
