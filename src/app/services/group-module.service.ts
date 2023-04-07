import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { group_module } from 'src/model/group_module';
import { FormGroup,FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GroupModuleService {

  //private readonly apiUrl = environment.apiUrl;
  
  constructor(private http : HttpClient) { }

  public getGroup ():Observable<group_module[]>{
    return this.http.get<group_module[]>(`${"http://localhost:8080/springbootwildfly"}/group/list`);
  }

  public addGroup(group:group_module):Observable<Object>{
    return this.http.post(`${"http://localhost:8080/springbootwildfly"}/group/add`,group);
  }

  public deleteGroup(id:any){
    return this.http.delete(`${"http://localhost:8080/springbootwildfly"}/group/delete/`+id);
  }

  public getGroupById(id:any):Observable<group_module>{
    return this.http.get<group_module>(`${"http://localhost:8080/springbootwildfly"}/group/`+id);
  }

  public updateGroup(group:group_module,id:number):Observable<Object>{
    return this.http.put(`${"http://localhost:8080/springbootwildfly"}/group/edit/${id}`,group);
  }
  
}
