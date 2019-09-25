import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {UserProfileComponent} from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserProfileComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  providers: []
})
export class HomeModule { }
