import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleFunction } from 'src/model/ModuleFunction';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  private baseUrl = 'http://localhost:8080/springbootwildfly';


  constructor(private http: HttpClient) { }

  public getAllFunction():Observable<ModuleFunction[]>{
    return this.http.get<ModuleFunction[]>(`${"http://localhost:8080/springbootwildfly"}/function/list`);
  }

  public deleteFonction(id:any){
    return this .http.delete('http://localhost:8080/springbootwildfly/function/delete/'+id)
  }

  public addFonction(fonction:any) {
    return this.http.post('http://localhost:8080/springbootwildfly/function/add',fonction);
  }
  public updateFonction(id:number,fonction:any){
    return this.http.put(`${"http://localhost:8080/springbootwildfly"}/function/edit/${id}`,fonction);
  }
  getAllRepRapports(): Observable<any> {
    const url = "http://localhost:8080/springbootwildfly/function/rapports";
    return this.http.get(url);
  }

  assignRepRapportToFunction(functionId: number, repRapportId: number): Observable<any> {
    const url = `${this.baseUrl}/function/${functionId}/reprapports/${repRapportId}`;
    return this.http.put(url, null);
  }

  getRepRapportsByFunctionId(functionId:any) {
    const url = `${this.baseUrl}/function/${functionId}/reprapports`;
   return this.http.get(url)
  }

  removeRepRapportFromFunction(functionId: any, repRapportId: any) : Observable<any>{
   
    const url = `${this.baseUrl}/function/${functionId}/reprapports/${repRapportId}`;
return this.http.delete(url)

  }
}
