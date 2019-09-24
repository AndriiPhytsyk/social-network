import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }
