import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as globals from "../globals/globals";
import 'rxjs/add/operator/map';
@Injectable()

export class MemberService {

  public baseUrl:string = globals.localhostUrl+'api/members/';
  constructor(public http: Http) {
   }
   public members: any;

   createMember(memberToCreate) {
    let headers = new Headers();
    console.log('inside create-FE' + this.baseUrl+'create');
    let body = {
      memberToCreate
    };
    return this.http.post(this.baseUrl+'create', body, {headers: headers}).map(res => res.json());
  }
  getAllMembers() {
    let headers = new Headers();
    return this.http.get(this.baseUrl, {headers: headers}).map(res => res.json());;
  }

  getMemberById(id, token) {
    let headers = new Headers();
    headers.append('Authorization', token); 
    return this.http.get(this.baseUrl+id, {headers: headers}).map(res => res.json());
  }

  updateMemberName(memberToUpdate, token, updaterId) {
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      memberToUpdate,
      updaterId
    };
    return this.http.put(this.baseUrl+'update/name', body, {headers}).map(res => res.json());
  }

  updateMemberEmail(memberToUpdate, token, updaterId){
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      memberToUpdate,
      updaterId
    };
    return this.http.put(this.baseUrl+'update/email', body, {headers}).map(res => res.json());
  }

  updateMemberAccess(memberToUpdate, token, updaterId, password) {
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      memberToUpdate,
      updaterId,
      password: 'aa',
    };
    return this.http.put(this.baseUrl+'update/access', body, {headers}).map(res => res.json());
  }

  updateMemberPassword(memberToUpdate, token, updaterId, oldPassword, newPassword) {
    let headers = new Headers();
    headers.append('Authorization', token);
    let body = { 
      memberToUpdate,
      updaterId,
      password: 'aa',
      newPassword: 'aa'
    };
    return this.http.put(this.baseUrl+'update/password', body, {headers}).map(res => res.json());
  }
}
