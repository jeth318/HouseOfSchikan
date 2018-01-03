import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _memberService: MemberService) { 
  }

  ngOnInit() {
    
  }

  public createMember(){
    this._memberService.createMember({priority: 6, firstName: 'Sven', lastName: 'Testsson'})   
    .subscribe((data)=>{
      if(data.success){
        console.log('YEY');
      }
      else{
        console.error(data);
      }
    });
  }
}
