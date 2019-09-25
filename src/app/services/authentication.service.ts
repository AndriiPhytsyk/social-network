import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// import {User} from '../models/user';
import {GLOBAL} from './global';


@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
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
          debugger;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    return this.http.get(`${GLOBAL.url}/auth/logout`);
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}
