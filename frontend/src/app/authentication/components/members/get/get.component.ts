import { Component, OnInit } from '@angular/core';
import { MemberService, IMember } from '../member.service';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  public memberItems: IMember[] = [];
  public checkAll: boolean; // สร้างตัวแปลมาเก็บค่า check ทั้งหมด
  public limitPage: number = 5;
  public startPage: number = 1;
  public paginations: number[] = [];

  constructor(
    private memberService: MemberService,
    private router: Router
    ) { }

    AppURL = AppURL;
    AuthURL = AuthURL;

  ngOnInit() {
    this.memberService
      .getItems() //เรียกใช้ getItems จาก memberService
      .subscribe(result => {
        // console.log(result);
        this.memberItems = result; //นำข้อมูลมาเก็บไว้ที่ memberItems จากนั้นข้อมูลจะถูกส่งไปวนลูปในหน้า HTML Get ซึ่งค่าของไฟล์เราได้มาจากไฟล์ Get.php ของทางฝั่ง Backend
        this.initializeLoadPagination();
      });

  }

  // เมื่อมีการกดปุ่มแก้ไขของแถวนั้นๆ
  public onEditModal(item: IMember) {
    this.memberService.updateModel = item;
    console.log(item);
    // Object.assign(this.memberService.updateModel, item);
  }

  // เมื่อมีการกดปุ่มลบข้อมูลของแถวนั้นๆ
  public onDeleteModal(item: IMember) {
    // console.log(item);
    Object.assign(this.memberService.deleteModel, item); // เมื่อมีการกดคลิก ค่าที่ถูกส่งมาจะถูกเก็บไว้ที่ Deletemodel ซึ่งอยู่ใน MemberService เพราะต้องมีตัวกลางเก็บค่าไว้ก่อน ไม่งั้นหายกลางทาง
  }

  // เมื่อมีการ check all ก็ให้ไปตาม update checkbox ที่อยู่ในตารางตามตัว checkbox all
  public onCheckAll() {
    // console.log(this.checkAll); // ดูค่าเช็คว่าขึ้นหรือไม่ t or f
    this.memberItems.map(item => {
      item.checked = this.checkAll;
      return item;
    });
    this.onStoreMemberDelete();
    // console.log(this.memberItems); // ดูว่ามีการเช็คแล้วขึ้น T or F มั้ย
  }

  // เมื่อมีการ checkbox ในแต่ละรายการของตาราง
  public onCheck() {
    // ตรวจสอบว่ามีการ Check เต็มหรือเปล่า ว่า item.checked ต้องมีทั้งหมด
    // ซึ่งจะมีทั้งหมดด้วย .length == 0 เราจึงต้องทำตรงกันข้าม คือมันจะต้องไม่ Check
    if (this.memberItems.filter(item => !item.checked).length == 0) { //ถ้าไม่มีการเช็ค
      this.checkAll = true; // ถ้าไม่เท่ากับ 0 ก็ต้องเป็น T
    }
    else if (this.memberItems.filter(item => item.checked).length == 0) {
      this.checkAll = false;
    }
    this.onStoreMemberDelete();
  }

  // เก็บค่าไอดีที่โดนเลือกลบหลายรายการ
  public onStoreMemberDelete() {
    this.memberService.deleteAllModel
    = this.memberItems // เราจะค้นหาก่อนว่า ตัวไหนถูกเช็คบ้าง ถ้ามีการ item.checked
      .filter(item => item.checked)
      .map(item => item.mem_id);
    // console.log(deleteAll); // ดูว่าเช็คแล้วขึ้นไอดีถูกต้องมั้ย
  }

    /** เมื่อกดไปที่หน้าถัดไปของ Pagination */
    public onNexPage() {
      if (this.startPage >= this.paginations.length) return;
      this.startPage = this.startPage + 1;
    }
  
    /** เมื่อกดปุ่มย้อนกลับของ Pagination */
    public onPrevPage() {
      if (this.startPage <= 1) return;
      this.startPage = this.startPage - 1;
    }
  
    /** คำนวนหน้า Pagination */
    private initializeLoadPagination() {
      const pageLength = Math.ceil(this.memberItems.length / this.limitPage);
      this.paginations = [];
      for (let index = 1; index <= pageLength; index++)
        this.paginations.push(index);
    }

}
