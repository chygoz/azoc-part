import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { ResourcesComponent } from './resources/resources.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ],
    //canActivate: [AuthGuardService]
  },
  {
    path: 'resources', component: LayoutComponent,
    children: [
      { path: '', component: ResourcesComponent }
    ],
    //canActivate: [AuthGuardService]
  },
  {
    path: 'makepayment', component: LayoutComponent,
    children: [
      { path: '', component: MakepaymentComponent }
    ],
    //canActivate: [AuthGuardService]
  },
  {
    path: 'payment-history', component: LayoutComponent,
    children: [
      { path: '', component: PaymentHistoryComponent }
    ],
    //canActivate: [AuthGuardService]
  },
  {
    path: 'profile', component: LayoutComponent,
    children: [
      { path: '', component: ProfileComponent }
    ],
    //canActivate: [AuthGuardService]
  },
  {
    path: 'settings', component: LayoutComponent,
    children: [
      { path: '', component: SettingsComponent }
    ],
    //canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
