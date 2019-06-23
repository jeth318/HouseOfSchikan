import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { localhostUrl } from "../globals/globals";
import { map } from 'rxjs/operators';
@Injectable()

export class MemberService {


  public baseUrl: string = localhostUrl + 'api/members/';
  constructor(public http: Http) {}

  public members: any;

  createMember(memberToCreate) {
    let headers = new Headers();
    let body = {
      memberToCreate
    };
    return this.http.post(this.baseUrl + 'create', body, { headers: headers }).pipe(map(res => res.json()));
  }
  getAllMembers() {
    let headers = new Headers();
    return this.http.get(this.baseUrl, { headers: headers }).pipe(map(res => res.json()));
  }

  getMemberById(id) {
    let headers = new Headers();
    return this.http.get(this.baseUrl + id, { headers: headers }).pipe(map(res => res.json()));
  }

  updateMemberName(memberToUpdate) {
    let headers = new Headers();
    let body = {
      memberToUpdate,
    };
    return this.http.put(this.baseUrl + 'update/name', body, { headers }).pipe(map(res => res.json()));
  }

  deleteMember(memberToDeleteId) {
    let headers = new Headers();
    let body = {
      memberToDeleteId
    };
    return this.http.delete(this.baseUrl + 'delete', { body, headers }).pipe(map(res => res.json()));
  }
}

