import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {  AuthService  } from '../authentication/auth-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpJWTInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService ) {
  }

  httpOptions;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('this interceptor is working');
    const token = this.authService.getAuthenticatedToken();
    console.log(token);
    const username = this.authService.getAuthenticatedUser();
    console.log(username);
    console.log(token, username);


    if (true) {
      console.log('..............................??????????????????????????????//////////////////////////////.......................>>>>>>>>>>>>>..........')
      console.log(token, username);
      const newReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });

      return next.handle(newReq); // edited request headers
    }

    return next.handle(req); // non-edited request headers
  }


}
