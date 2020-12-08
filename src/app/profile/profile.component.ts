import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData;
  userForm: FormGroup;
  constructor(private service: AppService, private formBuilder: FormBuilder) { }

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

  getUserData(){
    this.service.getUserdata({}).subscribe((resp) => {
      if(resp.status) {
        this.userData = resp.data;
        this.userForm.patchValue(this.userData)
      }
    })
  }

  onSubmit() {
    this.service.updateUserdata(this.userForm.value).subscribe ((resp) => {
      if(resp.status) {
        console.log("updated sucessfully")
      }else {
        console.log("something went wrong")
      }
    })
  }

}
