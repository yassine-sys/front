import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,private cookieService:CookieService,private userService : UserService) { }


  public generateToken(request: any) {
    return this.httpClient.post("http://localhost:8080/springbootwildfly/token/generate-token",  request,{ observe: 'response' }).subscribe(
      (response: HttpResponse<any>) => {
        const token = response.headers.get('Authorization');
        if (token) {
          this.cookieService.set('jwtToken', token);
          console.log(this.cookieService.get('jwtToken'))
        }
      },
      error => console.error(error)
    );
  }

  checkToken(): Observable<boolean> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    console.log(headers)
    return this.httpClient.get<boolean>(`${"http://localhost:8080/springbootwildfly"}/check?token=${token}`);
  }

  getUser():Observable<User>{
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.httpClient.get<User>(`${"http://localhost:8080/springbootwildfly"}/loginResp?token=${token}`);
  }

  getToken() {
    return this.cookieService.get('jwtToken');
    //return true;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      // return !this.isTokenExpired(token);
      return true;
    }
    return false;
  }

  private isTokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
