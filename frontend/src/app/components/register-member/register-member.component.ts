import { Component, OnInit } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { AppURL } from 'src/app/app.url';
import { Router } from '@angular/router';

@Component({
  selector: "app-register-member",
  templateUrl: "./register-member.component.html",
  styleUrls: ["./register-member.component.css"]
})
export class RegisterMemberComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  Url = AppURL;
  form: FormGroup;

  ngOnInit() {
    // this.router.navigate(['/', AppURL.Register]);
  }
}
