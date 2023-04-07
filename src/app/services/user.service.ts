import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public updateUser(user: any) :Observable<Object>{
    return this.http.put(`${"http://localhost:8080/springbootwildfly"}/user/edit`,user);
  }

  constructor(private http : HttpClient) { }

  public getAllUsers ():Observable<User[]>{
    return this.http.get<User[]>(`${"http://localhost:8080/springbootwildfly"}/user`);
  }

  public deleteUser(id:any){
    return this.http.delete('http://localhost:8080/springbootwildfly/user/delete/'+id)
  }

  public addUser(user:any):Observable<Object>{
    return this.http.post(`${"http://localhost:8080/springbootwildfly"}/user/add`,user);
  }

}
