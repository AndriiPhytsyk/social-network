import {Component, OnInit} from '@angular/core';
// import {ConfirmationDialogService} from '../shared/services/confirmation-dialog.service';
import {UsersService} from '../shared/services/users.service';
import {AuthenticationService} from '../../services/authentication.service';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor( private authenticationService: AuthenticationService, private translate: TranslateService
) {}

  // public deleteUser() {
  //   this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete user ?')
  //     .then((confirmed) => {
  //
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }
  //
  // public logOut() {
  //   this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to log out ?')
  //     .then((confirmed) => {
  //       if (confirmed) {
  //         this.authenticationService.logout();
  //       }
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

}
