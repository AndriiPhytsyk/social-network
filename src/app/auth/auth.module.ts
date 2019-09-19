import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";

import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthModule { }
