import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azoc-part';
  status: boolean = false;
  clickEvent() {
    console.log("sadfss");
    this.status = !this.status;
  }
}
