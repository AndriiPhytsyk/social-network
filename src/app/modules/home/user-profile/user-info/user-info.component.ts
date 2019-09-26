
import {Component, Input, OnInit} from '@angular/core';

@Component({
 selector: 'app-user-info',
 templateUrl: 'user-info.component.html'
})

export class UserInfoComponent implements OnInit {

  @Input() userInfo;
 constructor() { }

 ngOnInit() { }

}
