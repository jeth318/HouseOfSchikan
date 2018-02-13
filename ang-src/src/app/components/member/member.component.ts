import { Component, OnInit, style } from '@angular/core';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {

  constructor(private _memberService: MemberService) {
    this.lastName = '';
    this.firstName = '';
    this.addMember = true;
    this.isLoading = false;
    this.description = '';
    this.isDataReady = false;
    this.memberModel = {};
    this.modalVisible = false;
    this.settingsText = 'Inställningar';
    this.showMembersArea = false;
  }

  public members: any[];
  public lastName: String;
  public addMember: Boolean;
  public firstName: String;
  public isLoading: Boolean;
  public description: String;
  public memberModel: any;
  public modalVisible: Boolean;
  public settingsText: String;
  public isDataReady: Boolean;
  public showMembersArea: Boolean;

  ngOnInit() {
    this.getAllMembers();
  }

  toggleSettings() {
  
    this.showMembersArea = !this.showMembersArea;
    if (this.showMembersArea) {
      this.settingsText = 'Göm inställningar';
    } else {
      this.settingsText = 'Inställningar';
    }
  }

  getAllMembers() {
    this._memberService.getAllMembers().subscribe((data) => {
      data.success ? this.members = data.members : null;
    });
  }

  selectedMember(id) {
    this.modalVisible = true
    this.addMember = false;
    this.members.forEach((memb, i) => {
      if (memb._id === id) {
        this.memberModel = this.members[i];
        return;
      }
    });
  }

  updateMember() {
    this.isLoading = true;
    this._memberService.updateMemberName(this.memberModel).subscribe(
      (data) => { },
      (error) => { },
      () => {
        this.getAllMembers();
        this.isLoading = false;
        this.memberModel = {};
        this.modalVisible = false;
      });
  }

  deleteMember() {
    this.isLoading = true;
    var txt;
    var r = confirm(`Säker på att du vill ta bort ${this.memberModel.firstName}?`);
    if (r == true) {
      txt = "You pressed OK!";
      this._memberService.deleteMember(this.memberModel._id).subscribe(
        (data) => { },
        (error) => { },
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

  initializeNew() {
    this.addMember = true;
    this.modalVisible = true;
    this.getAllMembers();
    this.memberModel = {};
  }

  cancel() {
    this.memberModel = {};
    this.modalVisible = false;
  }

  addNew() {
    this.isLoading = true;
    this.memberModel.priority = this.members.length + 1;
    this._memberService.createMember(this.memberModel).subscribe(
      (data) => { },
      (error) => { },
      () => {
        this.getAllMembers();
        this.isLoading = false;
        this.memberModel = {};
        this.modalVisible = false;
      }
    )
  }
}

