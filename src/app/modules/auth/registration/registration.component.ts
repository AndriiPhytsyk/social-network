import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserService} from '../../../services/user.service';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  onSubmit() {
    console.log(this.registerForm)
    this.submitted = true;

    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return;
    // }

    return this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        user => {
          console.log(user);
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          console.log('error',error)
          this.alertService.error(error);
        });
  }

}
