import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  passwordResetEmail: string;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    console.log(222,form)
    if(form.invalid) {
      return
    }

    const {passwordResetEmail} = form.value;
    debugger;

    this.authService.forgotPassword(passwordResetEmail).subscribe(result=> {
      if (result['success']) {
        alert('check your email')
      }
    })
  }

}
