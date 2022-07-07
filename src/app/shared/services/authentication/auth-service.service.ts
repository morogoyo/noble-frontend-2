import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../interfaces/user';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';



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
      'Content-Type': environment.CONTENT_TYPE,
      'Access-Control-Allow-Origin': environment.ACCESS_CONTROL_ALLOW_ORIGIN,
      'Access-Control-Allow-Methods': environment.ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': environment.ACCESS_CONTROL_ALLOW_HEADERS,
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
    this.authCall = this.http.post<any>(environment.API_URL_AUTH,
      this.userCreds
      , this.httpOptions)
      .pipe(map(data => {
        localStorage.setItem(environment.AUTHENTICATED_USER, `${data.userName}`);
        localStorage.setItem(environment.TOKEN, `Bearer ${data.token}`);
        sessionStorage.setItem(environment.AUTHENTICATED_USER, `${data.userName}`);
        sessionStorage.setItem(environment.TOKEN, `Bearer ${data.token}`);

        this.userSubject.next(data);
        // this.startRefreshTokenTimer();  Need to fix the refresh token method
        return data;
      }));
    console.log(this.authCall);
    return this.authCall;
  }

  logout(): void {
    console.log('logging out');
    localStorage.setItem(environment.AUTHENTICATED_USER, '');
    localStorage.setItem(environment.TOKEN, '');
  }

  refreshToken(): any {
    return this.http.post<any>(environment.REST_API_SERVER + '/refresh', {}, {withCredentials: true})
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


  getAuthenticatedUser(): string  {
    return localStorage.getItem(environment.AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser()) {
      return localStorage.getItem(environment.TOKEN);
    }
  }


}

// Need to find out what this is doing before deleting
export class AuthenticationBean {
  constructor(public message: string) {
  }
}

