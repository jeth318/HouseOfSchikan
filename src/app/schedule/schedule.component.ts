import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.year = new Date().getFullYear().toString();
    this.month = new Date().getMonth().toString();
    this.memberList = [
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

    this.tasks = [
        'köket',
        'tvätt',
        'stora-badrummet',
        'lilla-badrummen',
        'damsuga',
    ];

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

    public tasks: any[];
    public memberList: Member[];
    public months: String[];
    public year: String;
    public month: String;

    public genereteTaskList() {
        let taskListRet = this.tasks;
        let taskReturn = [];
        let temp = [];
        switch (this.memberList.length) {
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
                break;
        }
        return taskReturn;
    }

    public renderTasks(index) {
        let newArr = [];
        let taskList = this.genereteTaskList();

        for (let i = 0; i < 12; i++) {
            var pointer = (i + index) % taskList.length;
            if (!Array.isArray(taskList[pointer]))  {
                newArr.push(new Array(taskList[pointer]));
            } else {
                newArr.push(taskList[pointer]);
            }
        }
        return newArr.reverse();
    }

    public shortMonth(index) {
        return this.months[index].slice(0, 3);
    }

    public getInitials(index) {
        return this.memberList[index].firstName.slice(0, 1) +
            '.' + this.memberList[index].lastName.slice(0, 1)
    }

    public getMembersLenth() {
        return this.memberList.length;
    }

    public getIcon(taskList, index) {
        let className: String;
        return taskList[index];
    }

    public currentMonth(index) {
        return Number(this.month) === index ? true : false;
    }
    
    ngOnInit() {
    }
}
