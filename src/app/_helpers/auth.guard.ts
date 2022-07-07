import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AUTHENTICATED_USER, AuthService, TOKEN} from '../shared/services/authentication/auth-service.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
noble;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    const currentUser = this.authService.user;
    if (this.authService.getAuthenticatedToken()) {
      console.log('Auth guard still needs logic');
      console.log(this.authService.getAuthenticatedUser(), this.authService.getAuthenticatedToken());
      console.log('THIS IS THE VALUE OF THE USER ' + this.authService.userValue);
      // return this.router.navigate(['client','view'], {queryParams: {returnUrl: state.url}});
      return true;
    }else{
      return this.router.navigate(['authentication', 'login-2'], { queryParams: { returnUrl: state.url } });
    }
  }
}
