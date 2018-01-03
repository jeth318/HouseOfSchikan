import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _memberService: MemberService) { 
    this.members = [];
  }

  public members: any;

  ngOnInit() {
    this._memberService.getAllMembers()
    .subscribe((data)=>{
      if(data.success) {
        data.members.forEach(m => {
          this.members.push(m);
        });
      } else {
        console.log('shit');
      }
    })
  }

  public doCreate(fn, ln){
    if (fn && ln) {
      this._memberService.createMember({priority: this.members.length+1, firstName: fn, lastName: ln})   
    .subscribe((data)=>{
      data.success && console.log('YEAH');
      !data.success && console.log('fail');
    });
    }
  }
}
