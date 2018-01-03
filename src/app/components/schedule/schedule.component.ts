import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { TaskService } from '../../services/task.service';

interface Member {
  firstName: String;
  lastName: String;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private _memberService: MemberService, private _taskService: TaskService) {
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
        this.year = new Date().getFullYear().toString();
        this.month = new Date().getMonth().toString();
        this.members = this._memberService.getAllUsers();
        this.tasks = this._taskService.getAllTasks();
    }

    public tasks: any;
    public members: Member[];
    public months: String[];
    public year: String;
    public month: String;

    public genereteTaskList() {
        let taskListRet = this.tasks;
        let taskReturn = []

        switch (this.members.length) {
            case 5:
                taskReturn = this.tasks;
                break;
            case 4:
                taskReturn.push(taskListRet.slice(0, 2));
                taskReturn.push(taskListRet[2]);
                taskReturn.push(taskListRet[3]);
                taskReturn.push(taskListRet[4]);
                break;
            case 3:
                taskReturn.push(taskListRet.slice(0, 2));
                taskReturn.push(taskListRet.slice(2, 4));
                taskReturn.push(taskListRet[this.tasks.length-1]);
                break;
            case 2:
                taskReturn.push(taskListRet.slice(0, 2));
                taskReturn.push(taskListRet.slice(2, 5));
                break;
            case 1:
                taskReturn.push(taskListRet.slice(0, 5));
                break;
            default:
                break;
        }
        return taskReturn;
    }

    public renderTaskList(taskIndex, monthIndex) {
        let newArr = [];
        let taskList = this.genereteTaskList();

        for (let i = 0; i < 12; i++) {
            var pointer = (i + taskIndex) % taskList.length;
            if (Array.isArray(taskList[pointer]))  {
                newArr.push(taskList[pointer]);
            } else {
                newArr.push(new Array(taskList[pointer]));
            }
        }
        newArr.reverse();
        return newArr[monthIndex];
    }

    public getMembersLenth() {
        return this.members.length;
    }

    public shortMonth(index) {
        return this.months[index].slice(0, 3);
    }

    public currentMonth(index) {
        return Number(this.month) === index ? true : false;
    }

    public getInitials(index) {
        return this.members[index].firstName.slice(0, 1) + '.' 
            + this.members[index].lastName.slice(0, 1)
    }
}
