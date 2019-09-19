import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// import {MaterialModule} from './material.module';
// import {AuthModule} from "./auth/auth.module";

import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule

  ],
  providers: []
})
export class HomeModule { }
