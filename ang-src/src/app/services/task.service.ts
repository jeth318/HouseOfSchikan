import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as globals from "../globals/globals";
import 'rxjs/add/operator/map';
@Injectable()

export class TaskService {

  public baseUrl:string = globals.localhostUrl+'api/tasks/';

  constructor(private http:Http) {
   }
   public tasks: any;

  getAllTasks() {
    let headers = new Headers();
    return this.http.get(this.baseUrl, {headers: headers}).map(res => res.json());;
  }
}
