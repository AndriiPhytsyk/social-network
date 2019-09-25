import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  isInputsShown = false;
  userInfoForm: FormGroup;

  submitted = false;

  userInfo = {};

  constructor( private formBuilder: FormBuilder, private usersService: UsersService ){}

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      'name': new FormControl(null,[Validators.required]),
      'lastname': new FormControl(null,[ Validators.required]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'city': new FormControl(null,[ Validators.required]),
      'country': new FormControl(null,[ Validators.required]),
      'age': new FormControl(null,[ Validators.required]),
      'description': new FormControl(null,[ Validators.required])
    });

    this.usersService.getUsersMe()
      .subscribe(userInfo=>{
        console.log(userInfo);
        this.userInfo = userInfo.user;
        console.log('userInfo',userInfo)

      });

  }

  showInfoInputs() {
    this.isInputsShown = !this.isInputsShown;
  }

  hideInputs() {
    this.isInputsShown = false;
  }

  onSubmit() {
    const {name, lastname, phone, address, email, birthDate} = this.userInfoForm.value;
    console.log(this.userInfoForm.value)
  }
}
