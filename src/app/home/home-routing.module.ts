import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import {HomeComponent} from "./home.component";
import {Injectable} from "@angular/compiler/src/core";
import {AuthGuard} from "../guards/auth.guard";


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
