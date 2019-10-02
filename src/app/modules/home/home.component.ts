import {Component, OnInit} from '@angular/core';
// import {ConfirmationDialogService} from '../shared/services/confirmation-dialog.service';
import {UsersService} from '../shared/services/users.service';
import {AuthenticationService} from '../../services/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {ConfirmationDialogService} from '../shared/services/confirmation-dialog.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor( private authenticationService: AuthenticationService,
               private translate: TranslateService,
               private confirmationDialogService: ConfirmationDialogService,
               private userService: UserService,
               private router: Router
) {}

  public deleteUser() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete user ?')
      .then((confirmed) => {
        if(confirmed) {
          this.userService.deleteUser().subscribe(result=> {
            if (result['success']) {
              this.router.navigate(['/login']);
            }
          })
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  public logOut() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to log out ?')
      .then((confirmed) => {
        if (confirmed) {
           this.authenticationService.logout();
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
