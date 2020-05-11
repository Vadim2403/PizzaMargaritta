import { ApiResult } from './../../../Models/result.model';
import { UserItem } from './../Models/user-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

constructor(private http: HttpClient) {}
  baseUrl = '/api/UserManager';

  getAllUsers(){
    return this.http.get(this.baseUrl);
  }
  removeUser(id : string){
    return this.http.post(this.baseUrl + '/RemoveUser/' + id, id);
  }
  
  getUser(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  editUser(id: string, model: UserItem): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/editUser/' + id, model);
  }
}
