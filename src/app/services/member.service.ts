import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class MemberService {

  public baseUrl:string = 'api/users/';
  constructor(public http: Http) {
    this.members = [
        {
            firstName: 'Joline',
            lastName: 'Schikan',
        },
        {
            firstName: 'Hampus',
            lastName: 'Ågren',
        },
        {
            firstName: 'Linnea',
            lastName: 'Ramne',
        },
        {
            firstName: 'Iris',
            lastName: 'Minö',
        },
        {
            firstName: 'Jesper',
            lastName: 'Thörnberg',
        }
    ];
   }
   public members: any;

  getAllUsers() {
    let headers = new Headers();
    //headers.append('Authorization', token);
    return this.members;
  }

  getUserById(id, token) {
    let headers = new Headers();
    headers.append('Authorization', token); 
    return this.http.get(this.baseUrl+id, {headers: headers}).map(res => res.json());
  }

  updateUserName(userToUpdate, token, updaterId) {
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      userToUpdate,
      updaterId
    };
    return this.http.put(this.baseUrl+'update/name', body, {headers}).map(res => res.json());
  }

  updateUserEmail(userToUpdate, token, updaterId){
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      userToUpdate,
      updaterId
    };
    return this.http.put(this.baseUrl+'update/email', body, {headers}).map(res => res.json());
  }

  updateUserAccess(userToUpdate, token, updaterId, password) {
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      userToUpdate,
      updaterId,
      password: 'aa',
    };
    return this.http.put(this.baseUrl+'update/access', body, {headers}).map(res => res.json());
  }

  updateUserPassword(userToUpdate, token, updaterId, oldPassword, newPassword) {
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      userToUpdate,
      updaterId,
      password: 'aa',
      newPassword: 'aa'
    };
    return this.http.put(this.baseUrl+'update/password', body, {headers}).map(res => res.json());
  }
}
