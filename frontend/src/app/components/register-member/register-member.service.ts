import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterMemberService {

  private backendTempURL: string = 'http://localhost:9000/api/temp';

  constructor(private httpClient: HttpClient) { }

  // บันทึกข้อมูล Temp
  postTempItem(value: Temp){
    return this.httpClient.post(this.backendTempURL, value);
  }
  
}

export interface Temp {
  temp_id?: string;
  temp_fname: string;
  temp_lname: string;
  temp_id_card: string;
  temp_email: string;
  temp_password: string;
  temp_cpassword: string;
}
