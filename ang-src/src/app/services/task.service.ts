import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as globals from "../globals/globals";
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Injectable()

export class TaskService {

  public baseUrl:string = globals.localhostUrl+'api/tasks/';

  constructor(private http:Http) {
   }
   public tasks: any;

  getAllTasks() {
    let headers = new Headers();
    return this.http.get(this.baseUrl, {headers: headers}).pipe(map(res => res.json()));
  }
}
