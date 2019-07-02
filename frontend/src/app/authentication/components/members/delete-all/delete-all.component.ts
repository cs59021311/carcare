import { Component, OnInit, Input } from '@angular/core';
import { GetComponent } from '../get/get.component';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent implements OnInit {

  @Input('getComp') getComp: GetComponent;

  constructor(public memberService: MemberService) { }

  ngOnInit() {
  }

  // ส่งข้อมูลไปลบข้อมูลที่ Backend
  public onSubmit() {
    this.memberService
    .deleteAllItem(this.memberService.deleteAllModel)
    .subscribe(
      result => {
        console.log(result);
      },
      excep => alert(excep.error.message)
    );
  }
}
