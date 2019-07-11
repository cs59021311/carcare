import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { IRegisterComponent } from './register.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertService } from '../../shareds/services/alert.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shareds/services/validators.service';
import { MemberRegisterService, TempOne } from './member-register.service';
declare let $;
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent, OnInit {

    // สร้าง model เอาไว้เก็บค่าที่อยู่ใน Input
    // public model: IMember = {
    //     mem_fname: '',
    //     mem_lname: '',
    //     mem_id_card: '',
    //     mem_email: '',
    //     mem_password: '',
    //     mem_cpassword: '',
    //     mem_service_name: '',
    //     mem_detials: '',
    //     mem_address: '',
    //     mem_province: '',
    //     mem_canton: '',
    //     mem_district: '',
    //     mem_phone: '',
    //     mem_photo_service: '',
    //     mem_business_license: '',
    // };

    public tempOne: TempOne[] = [];

    constructor(
        private member_registerService: MemberRegisterService,
        // private builder: FormBuilder,
        private alert: AlertService,
        // private validators: ValidatorsService
        // private account: AccountService,
        private router: Router,
    ) {
        // this.initialCreateFormData();
    }

    ngOnInit() {
        this.member_registerService
        .getItem()
        .subscribe(result =>{
            // console.log(result); //แสดงค่า Temp จากอีกหน้า
            this.tempOne = result;
        });
    }

    Url = AppURL;
    form: FormGroup;

    // ส่งข้อมูลไปบันทึกที่ฝั่ง Backend
    public onSubmit() {

        // console.log(this.model);

        // this.member_registerService
        //     .postItem(this.model)
        //     .subscribe(
        //         result => {
        //             console.log(result);
        //         },
        //         // excep => alert(excep.error.message)
        //     );

        this.alert.notify('ลงทะเบียนสำเร็จ!', 'info');  // ลงทะเบียนสำำเร็จให้ แสดง alert
        this.router.navigate(['/', AppURL.Login]);  // เด้งไปที่หน้า login

        // if (this.form.invalid)
        //     return this.alert.someting_wrong();
        //     // ส่งข้อมูลหา server
        // this.account
        //     .onRegister(this.form.value)    // onRegister ส่ง value เข้าไป
        //     .then(res => {
        //         this.alert.notify('ลงทะเบียนสำเร็จ!', 'info');  // ลงทะเบียนสำำเร็จให้ แสดง alert
        //         this.router.navigate(['/', AppURL.Login]);  // เด้งไปที่หน้า login
        //     })
        //     .catch(err => this.alert.notify(err.Message));  // แต่ถ้าเกิดมีการ error ก็มีการทำ notify ออกมา
    }

    // สร้างฟอร์ม
    // private initialCreateFormData() {
    //     this.form = this.builder.group({
    //         firstname: ['', [Validators.required]],
    //         lastname: ['', [Validators.required]],
    //         email: ['', [Validators.required, Validators.email]],
    //         password: ['', [Validators.required, this.validators.isPassword]],
    //         cpassword: ['', [Validators.required, this.validators.comparePassword('password')]]
    //     });
    // }

    // สร้าง validate เอง รหัสผ่านให้ตรงกัน ย้ายไป validators.service.ts
    // private comparePassword(passwordField: string) {
    //     return function (confirm_password: AbstractControl) {
    //         if (!confirm_password.parent) return;
    //         const password = confirm_password.parent.get(passwordField);
    //         const passwordSubscripe = password.valueChanges.subscribe(() => {
    //             confirm_password.updateValueAndValidity();
    //             passwordSubscripe.unsubscribe();
    //         });
    //         if (confirm_password.value === password.value)
    //             return;
    //         return { compare: true };
    //     }
    // }
}
