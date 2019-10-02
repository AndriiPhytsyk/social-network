import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RestorePasswordComponent} from './forgot-password/restore-password.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  // { path: 'forgot-password', component: RestorePasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: RestorePasswordComponent },
  { path: 'auth/changePassword/:token', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
