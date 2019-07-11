import { Component, OnInit } from '@angular/core';
import { MemberService } from '../members/member.service';
import { IStore, StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public model: IStore = {
    mem_service_name: 'Car',
    mem_detials: 'ปะยาง',
    mem_address: '15/4',
    mem_province: 'พะเยา',
    mem_canton: 'เมือง',
    mem_district: 'แม่กา',
    mem_phone: '0954468930'

};

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  // ส่งข้อมูลไปบันทึกที่ Backend
  public onSubmit() {
    this.storeService
        .postItem(this.model)
        .subscribe(
          result => {
            console.log(result);
          },
        excep => alert(excep.error.message)
        );
  }

}
