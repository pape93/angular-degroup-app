import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersProfileDashboardComponent } from './users-profile-dashboard/users-profile-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component:UsersProfileDashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
