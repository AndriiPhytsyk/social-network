import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import {Injectable} from "@angular/compiler/src/core";
import {AuthGuard} from "../../guards/auth.guard";
import {HomeComponent} from './home.component';
import {UserComponent} from './users/user/user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from './user-profile/edit-profile/edit-profile.component';
import {UserMessagesComponent} from './user-profile/user-messages/user-messages.component';
import {UserInfoComponent} from './user-profile/user-info/user-info.component';


const routes: Routes = [
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, children: [
      {path: 'users/me/edit', component: EditProfileComponent},
      {path: 'users/me/messages', component: UserMessagesComponent},
      {path: 'users/me', component: UserInfoComponent},
      {path: 'users/:id', component: UserComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
