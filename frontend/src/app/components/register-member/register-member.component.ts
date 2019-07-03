import { Component, OnInit } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { AppURL } from 'src/app/app.url';
import { Router } from '@angular/router';
import { RegisterMemberService, Temp } from './register-member.service';

@Component({
  selector: "app-register-member",
  templateUrl: "./register-member.component.html",
  styleUrls: ["./register-member.component.css"]
})
export class RegisterMemberComponent implements OnInit {

  // สร้าง Model เอาไว้เก็บค่าที่ทำการป้อนข้อมูล
  public model: Temp = {
    temp_fname: 'ttt',
    temp_lname: 'yyy',
    temp_id_card: '1659985645896',
    temp_email: 'eee@gmail.com',
    temp_password: '123456',
    temp_cpassword: '123456',
  };

  constructor(
    private registerMemberService: RegisterMemberService,
    private router: Router
  ) {}

  Url = AppURL;
  form: FormGroup;

  ngOnInit() {
    // this.router.navigate(['/', AppURL.Register]);
  }

  // ส่งข้อมูลไป save ยัง backend temp
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

    this.router.navigate(['/', AppURL.Register]);
  }

}
