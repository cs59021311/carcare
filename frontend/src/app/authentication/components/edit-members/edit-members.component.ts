import { Component, OnInit } from '@angular/core';
import { MemberService, IMember } from '../members/member.service';

@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.css']
})
export class EditMembersComponent implements OnInit {

  // สร้าง model เอาไว้เก็บค่า
  public model: IMember;

  constructor(private memberService: MemberService) { 
    this.memberService.updateModel;
  }

  ngOnInit() {
  }

}
