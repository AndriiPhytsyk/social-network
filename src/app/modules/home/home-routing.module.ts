import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import {Injectable} from "@angular/compiler/src/core";
import {AuthGuard} from "../../guards/auth.guard";
import {HomeComponent} from './home.component';


const routes: Routes = [
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
  {path: 'users/me', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
