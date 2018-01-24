import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { TaskService } from '../../services/task.service';

interface Member {
  _id: Number;
  firstName: String;
  lastName: String;
}

interface Task {
  _id: Number;
  name: String;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public tasks: String[];
  public members: any[];
  public months: String[];
  public taskList: any[];
  public year: String;
  public month: String;
  public isDataReady: Boolean;

  constructor(private _memberService: MemberService, private _taskService: TaskService) {

    this.isDataReady = false;
    this.year = new Date().getFullYear().toString();
    this.month = new Date().getMonth().toString();
    this.months = [
      'Januari',
      'Februari',
      'Mars',
      'Aprli',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktober',
      'November',
      'December',
    ];
  }

  ngOnInit() {
    this.getAllMembers();
    this.getAllTasks();
  }

  getAllTasks() {
    this._taskService.getAllTasks()
      .subscribe((data) => {
        data.success ? this.tasks = data.tasks : null;
      });
  }

  getAllMembers() {
    this._memberService.getAllMembers()
      .subscribe((data) => {
        data.success ? this.members = data.members : null;
      });
  }

  public getMembersLength() {
    return this.members.length;
  }

  public shortMonth(index) {
    return this.months[index].slice(0, 3);
  }

  public currentMonth(index) {
    return Number(this.month) === index ? true : false;
  }

  public getInitials(memberIndex) {
    return this.members[memberIndex].firstName.slice(0, 1) + 
     '.' + this.members[memberIndex].lastName.slice(0, 1);
  }

  public generateTaskList() {
    console.log('Ricke')
    let taskReturn = [];
    const membCount = this.members.length;
    const taskCount = this.tasks.length;

    this.tasks.forEach((task, i) => {
      if (taskReturn[i % membCount] === undefined)
        taskReturn[i % membCount] = task;
      else if (Array.isArray(taskReturn[i % membCount]))
        taskReturn[i % membCount].push(this.tasks[i % taskCount]);
      else
        taskReturn[i % membCount] = [taskReturn[i % membCount], this.tasks[i % taskCount]];
    })  
    console.log(taskReturn);
    this.taskList = taskReturn;
  }

  public renderTaskList(memberIndex, monthIndex){
    !this.taskList && this.generateTaskList();
    if (!Array.isArray(this.taskList[(memberIndex + monthIndex) % this.taskList.length]))
      return [this.taskList[(memberIndex + monthIndex) % this.taskList.length]];
    else
      return this.taskList[(memberIndex + monthIndex) % this.taskList.length]
  }
}

