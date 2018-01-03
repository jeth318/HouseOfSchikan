import { Injectable } from '@angular/core';
/* import { Http, Headers } from '@angular/http'; */
import 'rxjs/add/operator/map';
@Injectable()

export class TaskService {

  public baseUrl:string = 'api/users/';
  constructor() {
    this.tasks = [
        'köket',
        'tvätt',
        'stora-badrummet',
        'lilla-badrummen',
        'damsuga',
    ];
   }
   public tasks: any;

  getAllTasks() {
    return this.tasks;
  }
}
