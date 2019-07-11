import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddMemberService {

  private adminURL: string = 'http://localhost:9000/api/temp';

  constructor(private httpClient: HttpClient ) { }

  // ดึงข้อมูล Admin
  getAdminItem(){
    return this.httpClient.get<IAdmin[]>(this.adminURL);
  }
}

export interface IAdmin {
  id: string;
  a_email: string;
  a_fname: string;
  a_lname: string;
  a_adr: string;
  a_tel: string;
  cr_by?: any;
  cr_date: string;
  upd_date: string;
  upd_by?: any;
  is_active?: any;
}
