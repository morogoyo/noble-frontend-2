import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

import {Router} from '@angular/router';
import {API_URL_AUTH, REST_API_SERVER} from '../../app.constants';
import {User} from '../interfaces/user';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const CONTENT_TYPE = 'application/json';
export const ACCESS_CONTROL_ALLOW_ORIGIN = '*';
export const ORIGIN = 'http://localhost:4200';
export const ACCESS_CONTROL_ALLOW_METHODS = 'PUT, DELETE, POST, GET, OPTIONS';
export const ACCESS_CONTROL_ALLOW_HEADERS = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept';


@Injectable({
    providedIn: 'root'
})
export class AuthService {




    constructor(private router: Router, private http: HttpClient  ) {

        this.userSubject = new BehaviorSubject<User>(null);
        this.user = this.userSubject.asObservable();

    }

    public get userValue(): User {
        return this.userSubject.value;
    }
    private authCall: Observable<any>;
    userCreds: User;


    // url = "http://localhost:8080/authenticate";
    httpOptions = {
        // tslint:disable-next-line:max-line-length
        headers: new HttpHeaders({
            'Content-Type': CONTENT_TYPE,
            'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
            'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
            'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS
        })
    };

    //////////////////////////////////// new methods from tutorial ////////////////////////////////////


    /////  https://jasonwatmore.com/post/2020/05/22/angular-9-jwt-authentication-with-refresh-tokens#app-initializer-ts

    // THIS IS  TUTORIAL CODE DO NOT USE //
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    // helper methods

    private refreshTokenTimeout;

    login(data) {
        this.userCreds = {username: data.userName, password: data.password};
        this.authCall = this.http.post<any>(`${API_URL_AUTH}`,
            this.userCreds
            , this.httpOptions)
            .pipe(map(data => {
                localStorage.setItem(AUTHENTICATED_USER, `${data.userName}`);
                localStorage.setItem(TOKEN, `Bearer ${data.token}`);
                sessionStorage.setItem(AUTHENTICATED_USER, `${data.userName}`);
                sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
                this.userSubject.next(data);
                // this.startRefreshTokenTimer();  Need to fix the refresh token method
                return data;
            }));

        return this.authCall;
    }

    logout() {
        console.log('logging out');
        localStorage.setItem(AUTHENTICATED_USER, '');
        localStorage.setItem(TOKEN, '');
        sessionStorage.setItem(AUTHENTICATED_USER, '');
        sessionStorage.setItem(TOKEN, '');
    }

    refreshToken(): any {
        return this.http.post<any>(`${REST_API_SERVER}/refresh`, {}, {withCredentials: true})
            .pipe(map((user) => {
                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                return user;
            }));
    }


    // need to fix VVVVVVVVVV  method
    private startRefreshTokenTimer(): void {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
        //
        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer(): void {
        clearTimeout(this.refreshTokenTimeout);
    }


    getAuthenticatedUser(): any {

        return localStorage.getItem(AUTHENTICATED_USER);
    }

    getAuthenticatedToken(): any{
        if (this.getAuthenticatedUser()) {
            return localStorage.getItem(TOKEN);
        }
    }


}

// Need to find out what this is doing before deleting
export class AuthenticationBean {
    constructor(public message: string) {
    }
}









/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import { Injectable } from '@angular/core';
// import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import {  AuthService  } from '../services/authentication/auth-service.service';
// import {Observable} from 'rxjs';
//
// @Injectable({
//     providedIn: 'root'
// })
// export class HttpJWTInterceptorService implements HttpInterceptor {
//
//     constructor(private authService: AuthService ) {
//     }
//
//     httpOptions;
//
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//         const token = this.authService.getAuthenticatedToken();
//         const username = this.authService.getAuthenticatedUser();
//
//
//         if (token && username) {
//             console.log(token, username);
//             const newReq = req.clone({
//                 setHeaders: {
//                     Authorization: token
//                 }
//             });
//             return next.handle(newReq); // edited request headers
//         }
//
//         return next.handle(req); // non-edited request headers
//     }
//
//
// }
