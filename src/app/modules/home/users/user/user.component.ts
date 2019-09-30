import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserInfo} from '../../../shared/models/userInfo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  userInfo: UserInfo;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.getUserById(id)
        .subscribe(userInfo=>{
        console.log(555,userInfo);
        this.userInfo = userInfo.user;
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
