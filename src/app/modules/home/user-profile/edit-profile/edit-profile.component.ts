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
  @Input() userInfo;
  @Output() onUserInfoEdited = new EventEmitter<UserInfo>();

  userInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
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
    let {name, lastname, city, country, age, description} = this.userInfoForm.value;
    age = +age;
    const userInfo = new UserInfo(name, lastname, city, country, age, description);

    this.userService.editUserInfo(userInfo)
      .subscribe(result => {
        if (result['success']) {
          // userInfo['image'] = '//placehold.it/150';
          this.userInfo = userInfo;
          this.onUserInfoEdited.emit(userInfo);
        }
        this.submitted = true;
      });
  }

}
