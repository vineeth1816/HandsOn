import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {user} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient:HttpClient) { }

  getAllUsers():Observable<user[]>{
    a:Observable<Object[]>;
    this.httpClient.get('(https://reqres.in/api/users?page=2');
    return null;
  }
  
}
