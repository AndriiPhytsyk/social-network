import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {GLOBAL} from '../../../services/global';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private http: HttpClient){}


  getUsersMe() {
    return this.http.get(`http://${GLOBAL.url}/users/me`)
  }

}
