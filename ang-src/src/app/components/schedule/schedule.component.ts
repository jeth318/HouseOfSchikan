import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { TaskService } from '../../services/task.service';

interface Member {
    _id: Number;
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
        
        this.isDataReady = false;
        this.members = [];
        this.tasks = [];
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
        this.fetchEvent().then(()=>{
          this.isDataReady = true;
        });
      }
    
      fetchEvent(){
        return new Promise((resolve, reject) => {
            this._memberService.getAllMembers()
            .subscribe((data) => {
                if (data.success) {
                    for (var i = 0; i < data.members.length; i++) {
                        let member = data.members[i];
                        this.members.push(member);
                    }
                    this._taskService.getAllTasks()
                    .subscribe((data) => {
                        if (data.success) {
                            for (var i = 0; i < data.tasks.length; i++) {
                                let task = data.tasks[i].name;
                                this.tasks.push(task);
                            }
                            resolve();
                        }
                    });
                }
            });       
      });
     }

    public tasks: any[];
    public members: any[];
    public months: String[];
    public year: String;
    public month: String;
    public isDataReady: Boolean;

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
                taskReturn.push(taskListRet[this.tasks.length - 1]);
                break;
            case 2:
                taskReturn.push(taskListRet.slice(0, 2));
                taskReturn.push(taskListRet.slice(2, 5));
                break;
            case 1:
                taskReturn.push(taskListRet.slice(0, 5));
                break;
            default:
                taskReturn = this.tasks;
                break;
        }
        return taskReturn;
    }

    public renderTaskList(taskIndex, monthIndex) {
        let newArr = [];
        let taskList = this.genereteTaskList();

        for (let i = 0; i < 12; i++) {
            var pointer = (i + taskIndex) % taskList.length;
            if (Array.isArray(taskList[pointer])) {
                newArr.push(taskList[pointer]);
            } else {
                newArr.push(new Array(taskList[pointer]));
            }
        }
        newArr.reverse();
        return newArr[monthIndex];
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

    public getInitials(index) {
        return this.members[index].firstName.slice(0, 1) + '.'
            + this.members[index].lastName.slice(0, 1)
    }
    
}

