import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import {GLOBAL} from './global';
import {Observable} from 'rxjs';
// import {map, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${GLOBAL.url}/users`);
    }

    getById(id: number) {
        return this.http.get(`${GLOBAL.url}/users/${id}`);
    }

    register(user: any): Observable<any>{

      return this.http.post(`http://${GLOBAL.url}/auth/signup`, user)

    }

    // addUserInfo(user) {
    //   return this.http.post(`http://${GLOBAL.url}/auth/signup`, user)
    // }

    // update(user: User) {
    //     return this.http.put(`${GLOBAL.url}/users/${user.id}`, user);
    // }
    //
    // delete(id: number) {
    //     return this.http.delete(`${GLOBAL.url}/users/${id}`);
    // }
}
