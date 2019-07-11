import { Component, OnInit, Input } from '@angular/core';
import { MemberService, IMember } from '../member.service';
import { GetComponent } from '../get/get.component';

declare const $: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('getComp') getComp: GetComponent; //ทำ declarelater

  // สร้าง model เอาไว้เก็บค่าที่อยู่ใน Input
  public model: IMember = {
    mem_fname: '',
    mem_lname: '',
    mem_email: '',
    mem_address: '',
    mem_phone: ''
  };

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  // ส่งข้อมูลไปบันทึกที่ Backend
  public onSubmit() {
    this.memberService
      .postItem(this.model)
      .subscribe(
        result => {
          // console.log(result); // ปิดไป
          this.onResetModel();
          this.getComp.ngOnInit();
          // $('#addEmployeeModal').modal('hide'); //ทำการปิด Modal
        },
        excep => alert(excep.error.message)
      );
  }

  // เคลียร์ค่าฟอร์ม
  public onResetModel() {
    this.model = {
      mem_fname: '',
      mem_lname: '',
      mem_email: '',
      mem_address: '',
      mem_phone: ''
    };
  }
}
