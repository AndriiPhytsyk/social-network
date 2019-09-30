import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {ImageCropperModule} from 'ngx-image-cropper';
// import {ConfirmationDialogService} from './services/confirmation-dialog.service';
// import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    ImageCropperModule

  ],

  providers: [UsersService],

})
export class SharedModule { }
