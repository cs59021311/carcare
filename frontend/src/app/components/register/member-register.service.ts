import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberRegisterService {

  private backendURL: string = 'http://localhost:9000/api/member'; // ร้องขอข้อมูล จาก URL ตัวนี้ของฝั่ง Backend

  constructor(private httpClient: HttpClient) { }

  // บันทึกข้อมูล Register
  postItem(value: IMember){
    return this.httpClient.post(this.backendURL, value); //ค่าข้อมูลที่เราจะเอาไปเซฟในฐานข้อมูล
  }


}

export interface IMember {
  mem_id?: string;
  mem_fname: string;
  mem_lname: string;
  mem_email: string;
  mem_address?: any;
  mem_phone: string;
  mem_created?: string;
  mem_updated?: string;
  mem_password?: any;
  mem_cpassword?: any;
  mem_service_name?: any;
  mem_detials?: any;
  mem_id_card?: any;
  cr_by?: any;
  upd_by?: any;
  is_active?: any;
  mem_province?: any;
  mem_canton?: any;
  mem_district?: any;
  mem_photo_service?: any;
  mem_business_license?: any;
  mem_lat?: any;
  mem_long?: any;

} 
