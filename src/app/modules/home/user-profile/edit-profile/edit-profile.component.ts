import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {

  submitted = false;
  @Input() userInfo = {};
  @Output() onUserInfoEdited = new EventEmitter();

  userInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    console.log(this.userInfo);
  }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      'name': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const {name, lastname, city, country, age, description} = this.userInfoForm.value;

    this.userService.editUserInfo({name, lastname, city, country, age, description})
      .subscribe(userInfo => {
        if(userInfo['success']){
          this.onUserInfoEdited.emit({name, lastname, city, country, age, description});
        }
        console.log(444,userInfo)

        this.submitted = true;

      });
  }

}
