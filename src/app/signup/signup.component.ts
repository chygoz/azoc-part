import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signForm: FormGroup;
  ErrText;
  paramToken;
  constructor(private formBuilder: FormBuilder, private service: AppService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.paramToken = this.route.snapshot.paramMap.get('id');
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
        let userSubsData = JSON.parse(localStorage.getItem(this.paramToken));
        console.log(userSubsData);
        if(userSubsData){
          // subscribe plan 
          userSubsData.email = this.signForm.get('email').value;
          
          this.service.registerSubscription(userSubsData).subscribe((resp1) => {
            console.log(resp1);
          })
        }else {

        }
        this.router.navigate(['/dashboard']);
      }else {
        this.ErrText = resp.msg;
      }
    })
  }


}
