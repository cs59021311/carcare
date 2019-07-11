import { Component, OnInit ,Input} from '@angular/core';
import { IMember, MemberService } from '../members/member.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { Router } from '@angular/router';
import { AuthURL } from '../../authentication.url';
import { AppURL } from 'src/app/app.url';
import { GetComponent } from '../members/get/get.component';
import { AddMemberService, IAdmin } from './add-member.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  public addminItem: IAdmin[] = [];
  // @Input('getComp') getComp: GetComponent; //ทำ declarelater 

  // สร้าง model เอาไว้เก็บค่าที่อยู่ใน label
  public model: IMember = {
    mem_username: 'ooo',
    mem_fname: 'ppp',
    mem_lname: 'fff',
    mem_id_card: '1659869569856',
    mem_email: 'ooo@gmail.com',
    mem_password: '123456',
    mem_cpassword: '123456',
    mem_service_name: 'yyy',
    mem_detials: 'yyy',
    mem_address: 'yyy',
    mem_phone: '0653698562',
  };

  AppURL = AppURL;
  AuthURL = AuthURL;
  constructor(
    private addMemberService: AddMemberService,
    private memberService: MemberService,
    private alert: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.addMemberService
    .getAdminItem()
    .subscribe(result => {
      // console.log(result);
      this.addminItem = result;
    });
  }

  public TestAdmin() {
    // var hour = new Date().getHours();
    var x = 1;
    var y = 1;
    var z ;
    if (x == y) {
      z = "ok";
    } else {
      z = "no";
    }
    document.getElementById("demo").innerHTML = z;
  }

  // ส่งข้อมูลไปบันทึกที่ backend
  public onSubmit(){
    // console.log(this.model);
    this.memberService
    .postItem(this.model)
    .subscribe(
      result => {
        console.log(result);
        // this.getComp.ngOnInit();
      },
      excep => alert(excep.error.message)
    );
    this.alert.notify('เพิ่มข้อมูลสำเร็จ!', 'info');  // ลงทะเบียนสำำเร็จให้ แสดง alert
    this.router.navigate(['/', AppURL.Authen, AuthURL.Member]);
  }

  // public onClickTest() {
  //   document.getElementById("demo").innerHTML = "Paragraph changed.";
    
  //   console.log(this.model);
  // }

}
