import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from './user-profile/edit-profile/edit-profile.component';
import {UserInfoComponent} from './user-profile/user-info/user-info.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserMessagesComponent } from './user-profile/user-messages/user-messages.component';


@NgModule({
  declarations: [
    HomeComponent,
    EditProfileComponent,
    UserInfoComponent,
    UserProfileComponent,
    UsersComponent,
    UserComponent,
    UserMessagesComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],

})
export class HomeModule { }
