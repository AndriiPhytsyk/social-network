import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";

import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {MaterialModule} from "../../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from '../shared/shared.module';
import { RestorePasswordComponent } from './forgot-password/restore-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    RestorePasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: []
})
export class AuthModule { }
