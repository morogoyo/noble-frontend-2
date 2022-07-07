import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Client } from '../../interfaces/client';
import {Router} from '@angular/router';
import {HttpJWTInterceptorService} from '../httpInterceptor/http-jwt-interceptor.service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',

})
export class ClientService {

  // todo need to figure out how to pass in headers dont have clear example
  // long time since I have done it

  private REST_API_SERVER = environment.REST_API_SERVER;
  private uri: string;
  private client: Client;


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



  public getClients(): Observable<any> {

    this.uri = '/client/all';
    console.log('this is the getClient() before  the call');

    const call = this.httpClient.get<any>(this.REST_API_SERVER + this.uri, this.httpOptions);
    console.log('this is the getClient()  after the call');
    console.log('this is the actual call to the backend' + call);
    return call;
  }

  public addClient(data): Observable<Client> {

    this.client = {
      fname: data.fname,
      lname: data.lname,
      username: data.username,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      userInfo: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender
      },
      clientAssets: {
        email: data.email,
        id: data.id,
        adminURL: data.adminURL,
        siteURL: data.siteURL,
        services: data.services
      },
      propertyDetails: {
        ownerName: data.ownerName,
        ownerMailingAddress: data.ownerMailingAddress,
        numberOfBedrooms: data.numberOfBedrooms,
        numberOfBathrooms: data.numberOfBathrooms,
        aproxSqFt: data.aproxSqFt,
        lotSizeSqFt: data.lotSizeSqFt,
        yearBuilt: data.yearBuilt,
        houseType: data.houseType,
        estimatedValue: data.estimatedValue,
        mortgageAmount: data.mortgageAmount,
        mortgageDate: data.mortgageDate,
        taxAssessedYear: data.taxAssessedYear,
        taxAssessedValue: data.taxAssessedValue,
        taxBilledAmount: data.taxBilledAmount,
        lastSoldDate: data.lastSoldDate,
        lastSoldPrice: data.lastSoldPrice,
        priorSaleDate: data.priorSaleDate,
        priorSalePrice: data.priorSalePrice,
        isGarage: data.isGarage,
        isBasement: data.isBasement,
        expectedSalesPrice: data.expectedSalesPrice,
        allCashSellingPrice: data.allCashSellingPrice,
        realEstateAgent: data.realEstateAgent,
        sellTiming: data.sellTiming,
        vacant: data.vacant,
        sellReason: data.sellReason,
        delinquentRent: data.delinquentRent,
        propertyDetails: data.propertyDetails
      },

      email: data.email,
      role: data.role


    };

    console.log(this.client.toString());


    this.uri = '/client/add';
    return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri, this.client, this.httpOptions);




  }
}
