import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpJWTInterceptorService} from '../httpInterceptor/http-jwt-interceptor.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AdminUrl} from '../../interfaces/adminUrl';
import {Client} from '../../interfaces/client';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientAssetsService {

  private REST_API_SERVER = environment.REST_API_SERVER;
  private uri: string;
  private adminUrl: AdminUrl;



  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': environment.CONTENT_TYPE,
      'Access-Control-Allow-Origin': environment.ACCESS_CONTROL_ALLOW_ORIGIN,
      Origin: environment.ORIGIN,
      'Access-Control-Allow-Methods': environment.ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': environment.ACCESS_CONTROL_ALLOW_HEADERS })
  };

  constructor(private httpClient: HttpClient, private httpIntercept: HttpJWTInterceptorService, private router: Router) {

  }



  public getAdminUrl(): Observable<any> {

    this.uri = '/admin/get';

    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri, this.httpOptions);
    // return Observable.create();  // only for testing a return

  }

  public addAdminUrl(data): Observable<Client> {

    this.adminUrl = {
      id: data.id,
      email: data.email,
      url: data.url

    };

    console.log(this.adminUrl.toString());


    this.uri = '/admin/add';
    return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri, this.adminUrl, this.httpOptions);




  }
}
