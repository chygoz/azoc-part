import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resources/resources.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UploadphotoComponent } from './uploadphoto/uploadphoto.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SubscribeplanComponent } from './subscribeplan/subscribeplan.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { Angular4PaystackModule } from 'angular4-paystack';


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ResourcesComponent,
    MakepaymentComponent,
    PaymentHistoryComponent,
    ProfileComponent,
    SettingsComponent,
    LayoutComponent,
    SidebarComponent,
    SignupComponent,
    LoginComponent,
    SubscribeComponent,
    ForgotpasswordComponent,
    UploadphotoComponent,
    ChangepasswordComponent,
    SubscribeplanComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    MatDatepickerModule,
    Angular4PaystackModule.forRoot('pk_test_57ca29691dbdf5c111814020111bbbd7c04befa7'),
  ],
  exports: [MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatRippleModule],
  entryComponents: [LoginComponent, SignupComponent],
  providers: [AuthGuardService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
