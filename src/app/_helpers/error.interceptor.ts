import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {AlertService} from '../modules/shared/services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private alertService: AlertService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        //   this.authenticationService.logout();
        //   location.reload(true);
      }
      const error = err.error.message || err.statusText;
      this.alertService.error('Шось пішло не так');
      return throwError(error);
    }));
  }
}
