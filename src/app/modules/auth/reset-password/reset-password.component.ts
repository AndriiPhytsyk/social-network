import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private token: string;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token");
    console.log(666,this.token)
  }


  onSubmit(form) {
    const {newPassword} = form.value;
    this.authService.changePassword(newPassword, this.token).subscribe(result=>{
      if(result['success']) {
        this.router.navigate(['/login'], {
          queryParams: {
            passwordChanged: true
          }
        })
      }
    })
  }
}
