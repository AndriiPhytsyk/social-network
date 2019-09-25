import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  submitted = false;

  userInfo = {};

  constructor( private usersService: UsersService ) {}

  ngOnInit() {

    this.usersService.getUsersMe()
      .subscribe(userInfo => {
        console.log(userInfo);
        this.userInfo = userInfo;
        console.log('userInfo', userInfo);

      });
  }
}
