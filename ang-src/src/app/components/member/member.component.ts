import { Component, OnInit, style } from '@angular/core';
import { MemberService } from '../../services/member.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {

  constructor(private _memberService: MemberService) {
    this.isDataReady = false;
    this.members = [];
    this.firstName = '';
    this.lastName = '';
    this.description = '';
    this.addMember = true;
    this.memberModel = {};
    this.isLoading = false;
    this.modalVisible = false;
    this.showMembersArea = false;
    /* this.settingsText = 'Hantera roomies';
    this.showMembersArea ? this.settingsText == 'Göm inställningar' : 'Hantera roomies';    */ 
   }
  public addMember: Boolean;  
  public description: String;
  public firstName: String;
  public lastName: String;  
  public members: any[];
  public memberModel: any;
  public isLoading: Boolean;
  public modalVisible: Boolean;
  public showMembersArea: Boolean;
  public settingsText: String;
  public isDataReady: Boolean;

  ngOnInit() {
    this.fetchEvent().then(()=>{
      this.isDataReady = true;
    });
  }

  fetchEvent(){
    return new Promise((resolve, reject) => {
      this._memberService.getAllMembers().subscribe((data) => {
        if (data.success) {
            this.members = data.members;
            resolve();
        }
    });
  });
 }
  toggleSettings(){
    this.showMembersArea = !this.showMembersArea;
    if (this.showMembersArea) {
      this.settingsText = '';
    } else {
      this.settingsText = '';
    }
  }

  getAllMembers(){
    this._memberService.getAllMembers().subscribe((data) => {
      if (data.success) {
          this.members = data.members;
      }
  });
  }

  selectedMember(id){
    this.modalVisible = true
    this.addMember = false;
    this.members.forEach((memb, i) => {
      if (memb._id === id) {
        this.memberModel = this.members[i];
        return;
      }
    });
  }

  updateMember(){
    this.isLoading = true;
    this._memberService.updateMemberName(this.memberModel).subscribe(
      (data) => {},
      (error) => {},
      () => {
        this.getAllMembers();
        this.isLoading = false;
        this.memberModel = {};
        this.modalVisible = false;
      });
  }

  deleteMember(){
    this.isLoading = true; 
    var txt;
    var r = confirm(`Säker på att du vill ta bort ${this.memberModel.firstName}?`);
    if (r == true) {
        txt = "You pressed OK!";
        this._memberService.deleteMember(this.memberModel._id).subscribe(
          (data) => {},
          (error) => {},
          () => { 
            this.getAllMembers();
            this.isLoading = false;
            this.memberModel = {};
            this.addMember = true;
            this.modalVisible = false;
            

          }
        );
    } else {
        txt = "You pressed Cancel!";
    }
  }

  initializeNew(){
    this.addMember = true;
    this.modalVisible = true; 
    this.getAllMembers();    
    this.memberModel = {}; 
    }

  cancel(){
    this.memberModel = {};
    this.modalVisible = false;
  }

  addNew(){
    this.isLoading = true;
    this.memberModel.priority = this.members.length+1;
    this._memberService.createMember(this.memberModel).subscribe(
      (data) => {},
      (error) => {},
      () => { 
        this.getAllMembers();
        this.isLoading = false;
        this.memberModel = {};
        this.modalVisible = false;        
      }
    )
  }
}

