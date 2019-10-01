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
// import {ConfirmationDialogComponent} from '../shared/components/confirmation-dialog.component';
// import {ConfirmationDialogComponent} from '../shared/components/confirmation-dialog.component';
// import {ConfirmationDialogService} from '../shared/services/confirmation-dialog.service';

@NgModule({
  declarations: [
    HomeComponent,
    EditProfileComponent,
    UserInfoComponent,
    UserProfileComponent,
    UsersComponent,
    UserComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  // providers: [ ConfirmationDialogService ],
  // entryComponents: [ ConfirmationDialogComponent ]
})
export class HomeModule { }
