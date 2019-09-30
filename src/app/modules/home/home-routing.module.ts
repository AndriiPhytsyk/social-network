import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import {Injectable} from "@angular/compiler/src/core";
import {AuthGuard} from "../../guards/auth.guard";
import {HomeComponent} from './home.component';
import {UserComponent} from './users/user/user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';


const routes: Routes = [
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, children:[
      {path: 'users/me', component: UserProfileComponent},
      {path: 'users/:id', component: UserComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
