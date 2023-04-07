import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}
    authRequest:any={
    "username":"test",
    "password":"test"
  };
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = `Bearer ${this.authService.getToken()}`;
    const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
    return next.handle(authReq);
  }
}
