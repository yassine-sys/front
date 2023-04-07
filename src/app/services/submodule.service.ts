import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubModule } from 'src/model/SubModule';

@Injectable({
  providedIn: 'root'
})
export class SubmoduleService {
  constructor(private http: HttpClient) { }

  public getAllSubModules ():Observable<SubModule[]>{
    return this.http.get<SubModule[]>(`${"http://localhost:8080/springbootwildfly"}/submodule/list`);
  }

  public addSubmodule(submodule:any):Observable<Object>{
    return this.http.post(`${"http://localhost:8080/springbootwildfly"}/submodule/add`,submodule);
  }
  
  public deleteSubModule(id:any){
    return this.http.delete(`${"http://localhost:8080/springbootwildfly"}/submodule/delete/`+id);
  }
  public updateSubModule(id:number,submodule:any){
    return this.http.put(`${"http://localhost:8080/springbootwildfly"}/submodule/edit/${id}`,submodule);
  }
}
