import { Component, OnInit } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { AppURL } from 'src/app/app.url';
import { Router } from '@angular/router';
import { RegisterMemberService, IMember } from './register-member.service';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
  selector: "app-register-member",
  templateUrl: "./register-member.component.html",
  styleUrls: ["./register-member.component.css"]
})
export class RegisterMemberComponent implements OnInit {

 // สร้าง Model เอาไว้เก็บค่าที่ทำการป้อนข้อมูล
    public model: IMember = {
        mem_username: 'ooo',
        mem_fname: 'ppp',
        mem_lname: 'fff',
        mem_id_card: '1659869569856',
        mem_email: 'ooo@gmail.com',
        mem_password: '123456',
        mem_cpassword: '123456',
    };

  constructor(
    private alert: AlertService,
    private registerMemberService: RegisterMemberService,
    private router: Router
  ) {}

  Url = AppURL;
  form: FormGroup;

  ngOnInit() {
    // this.router.navigate(['/', AppURL.Register]);
  }

  // ส่งข้อมูลไป save ยัง backend mem
  public onSubmit(){
    // console.log(this.model);
    this.registerMemberService
    .postTempItem(this.model)
    .subscribe(
      result => {
        console.log(result);
      },
      excep => alert(excep.error.message)
    );

    this.alert.notify('ลงทะเบียนสำเร็จ!', 'info');  // ลงทะเบียนสำำเร็จให้ แสดง alert
    this.router.navigate(['/', AppURL.Login]);
  }

}
