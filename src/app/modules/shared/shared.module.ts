import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule
  ],

  providers: [UsersService ],
})
export class SharedModule { }
