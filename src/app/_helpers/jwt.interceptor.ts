import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.tokens.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser['tokens']['accessToken']}`
                }
            });
        }

        return next.handle(request);
    }
}

// import {Injectable} from '@angular/core';
// import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
// import {BehaviorSubject, Observable, throwError} from 'rxjs';
//
// import {AuthenticationService} from '../services/authentication.service';
// import {catchError, filter, switchMap, take} from 'rxjs/operators';
//
// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//
//   private isRefreshing = false;
//   private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
//
//   constructor(private authenticationService: AuthenticationService) {
//   }
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//
//     if (this.authenticationService.getJwtToken()) {
//       request = this.addToken(request, this.authenticationService.getJwtToken());
//     }
//     // add authorization header with jwt token if available
//     return next.handle(request).pipe(catchError(error => {
//       if (error instanceof HttpErrorResponse && error.status === 401) {
//         return this.handle401Error(request, next);
//       } else {
//         debugger;
//         return throwError(error);
//       }
//     }));
//   }
//
//   private addToken(request: HttpRequest<any>, token: string) {
//     return request.clone({
//       setHeaders: {
//         'Authorization': `${token}`
//       }
//     });
//   }
//
//   private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
//     if (!this.isRefreshing) {
//       this.isRefreshing = true;
//       this.refreshTokenSubject.next(null);
//
//       return this.authenticationService.refreshToken().pipe(
//         switchMap((token: any) => {
//           debugger;
//           this.isRefreshing = false;
//           this.refreshTokenSubject.next(token.accessToken);
//           return next.handle(this.addToken(request, token.accessToken));
//         }));
//
//     } else {
//       debugger;
//       return this.refreshTokenSubject.pipe(
//         filter(token => token != null),
//         take(1),
//         switchMap(jwt => {
//           return next.handle(this.addToken(request, jwt));
//         }));
//     }
//   }
// }

