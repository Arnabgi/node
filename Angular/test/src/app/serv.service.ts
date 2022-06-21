import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(
    private obj:HttpClient
  ) { }

  add(value:any){
    return this.obj.post('http://localhost:3100/user-info/v1/create-info',value)
  }
}
