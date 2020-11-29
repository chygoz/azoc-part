import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ],
    //canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ],
    //canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
