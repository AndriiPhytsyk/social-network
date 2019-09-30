import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {UserInfo} from '../../../shared/models/userInfo';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {

  submitted = false;
  @Input() userInfo: UserInfo;
  @Output() onUserInfoEdited = new EventEmitter<UserInfo>();

  userInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    console.log(11, this.userInfo);
  }

  ngOnInit() {
    console.log(22, this.userInfo);
    this.userInfoForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const {name, lastname, city, country, age, description} = this.userInfoForm.value;
    const userInfo = new UserInfo(name, lastname, city, country, age, description);

    this.userService.editUserInfo(userInfo)
      .subscribe(userInfo => {
        if (userInfo['success']) {
          this.onUserInfoEdited.emit(userInfo);
        }

        this.submitted = true;

      });
  }

}
