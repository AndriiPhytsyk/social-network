import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// import {User} from '../models/user';
import {GLOBAL} from './global';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string) {
    return this.http.post<any>(`http://${GLOBAL.url}/auth/login`, {login, password})
      .pipe(map(user => {
        console.log(user)
        // login successful if there's a jwt token in the response
        if (user && user.tokens) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    console.log(2222);
    // return this.http.get(`${GLOBAL.url}/auth/logout`);
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    // this.currentUserSubject.next(null);
  }
}

// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {BehaviorSubject, Observable} from 'rxjs';
// import {map, tap} from 'rxjs/operators';
//
// // import {User} from '../models/user';
// import {GLOBAL} from './global';
// import {Tokens} from '../models/tokens';
//
//
// @Injectable({providedIn: 'root'})
// export class AuthenticationService {
//
//   private readonly JWT_TOKEN = 'accessToken';
//   private readonly REFRESH_TOKEN = 'refreshToken';
//
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser: Observable<any>;
//
//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }
//
//   public get currentUserValue() {
//     return this.currentUserSubject.value;
//   }
//
//   login(login: string, password: string) {
//     return this.http.post<any>(`http://${GLOBAL.url}/auth/login`, {login, password})
//       .pipe(map(user => {
//         console.log(user)
//         // login successful if there's a jwt token in the response
//         if (user && user.tokens) {
//           debugger;
//           // store user details and jwt token in local storage to keep user logged in between page refreshes
//           this.storeTokens(user.tokens);
//           this.currentUserSubject.next(user);
//         }
//
//         return user;
//       }));
//   }
//
//   refreshToken() {
//     return this.http.post<any>(`http://${GLOBAL.url}/auth/token/refresh`, {
//       'refreshToken': this.getRefreshToken()
//     }).pipe(tap((tokens: Tokens) => {
//       debugger;
//       this.storeJwtToken(tokens.accessToken);
//     }));
//   }
//
//   getJwtToken() {
//     return localStorage.getItem(this.JWT_TOKEN);
//   }
//
//   private storeTokens(tokens: Tokens) {
//     localStorage.setItem(this.JWT_TOKEN, tokens.accessToken);
//     localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
//   }
//
//
//   private getRefreshToken() {
//     return localStorage.getItem(this.REFRESH_TOKEN);
//   }
//
//   private storeJwtToken(accessToken: string) {
//     localStorage.setItem(this.JWT_TOKEN, accessToken);
//   }
//
//
//
//   logout() {
//     return this.http.get(`${GLOBAL.url}/auth/logout`);
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
//
//
// }

