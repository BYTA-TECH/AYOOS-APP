import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-add-member',
  templateUrl: './popover-add-member.page.html',
  styleUrls: ['./popover-add-member.page.scss'],
})
export class PopoverAddMemberPage implements OnInit {

  familyMembers:string[]=[];
  member:string;
  addFamilyMember(){
    this.familyMembers.push(this.member);
  }
  removeFamilyMember(member:string){
    let index=this.familyMembers.indexOf(member);
    this.familyMembers.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
