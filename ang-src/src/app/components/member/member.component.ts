import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private _memberService: MemberService) {
    this.members = [];
    this.firstName = '';
    this.lastName = '';
    this.description = '';
    this.addMember = true;
    this.memberModel = {};
    this.isLoading = false;
    this.successMessage;
    this.errorMessage;
    this.modalVisible = false;
    
   }
  public addMember: Boolean;  
  public description: String;
  public firstName: String;
  public lastName: String;  
  public members: any[];
  public memberModel: any;
  public isLoading: Boolean;
  public successMessage: String;
  public errorMessage: String;
  public modalVisible: Boolean;

  ngOnInit() {
    this.getAllMembers();
  }
  getAllMembers(){
    console.log(this.memberModel);
    this._memberService.getAllMembers().subscribe((data) => {
      if (data.success) {
          this.members = data.members;
      }
  });
  }

  selectedMember(id){
    this.modalVisible = true;
    this.addMember = false;
    this.successMessage = '';
     this._memberService.getMemberById(id).subscribe((data)=> {
       this.memberModel = data.member;
    });
  }

  updateMember(){
    this.isLoading = true;
    this.successMessage = '';
    this._memberService.updateMemberName(this.memberModel).subscribe(
      (data) => {},
      (error) => {},
      () => {
        this.getAllMembers();
        this.isLoading = false;
        this.successMessage = 'Uppdaterat!';
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
          (data) => {console.log('Tjena')},
          (error) => {this.errorMessage = 'Ooops! Det gick inte att ta bort'},
          () => { 
            this.getAllMembers();
            this.isLoading = false;
            this.memberModel = {};
            this.successMessage = 'Borttagen!'
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

  addNew(){
    this.isLoading = true;
    this.successMessage = '';
    this.memberModel.priority = this.members.length+1;
    this._memberService.createMember(this.memberModel).subscribe(
      (data) => {console.log('Tjena')},
      (error) => {this.errorMessage = 'Ooops! Det gick inte att spara'},
      () => { 
        this.getAllMembers();
        this.isLoading = false;
        this.memberModel = {};
        this.successMessage = 'Klart!';
        this.modalVisible = false;        
      }
    )
  }
}
