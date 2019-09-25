import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {
  @Input() userInfo = {};

  userInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    console.log(this.userInfo);
  }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'city': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const {name, lastname, phone, address, email, birthDate} = this.userInfoForm.value;
    console.log(this.userInfoForm.value)
  }

}
