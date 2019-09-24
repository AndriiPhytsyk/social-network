import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService){
    translate.addLangs(['ua', 'en']);
    translate.setDefaultLang('ua');
    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|ua/) ? browserLang : 'ua');
  }
}
