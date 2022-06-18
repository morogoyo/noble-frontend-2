import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {  AuthService  } from '../services/authentication/auth-service.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpJWTInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService ) {
    }

    httpOptions;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.getAuthenticatedToken();
        const username = this.authService.getAuthenticatedUser();


        if (token && username) {
            console.log(token, username);
            const newReq = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            return next.handle(newReq); // edited request headers
        }

        return next.handle(req); // non-edited request headers
    }


}
