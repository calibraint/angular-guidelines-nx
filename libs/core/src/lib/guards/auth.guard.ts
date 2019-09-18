import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';
import { LoginNotRequiredPages } from './login-rule.constants';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  loginNotRequiredPages: typeof LoginNotRequiredPages = LoginNotRequiredPages;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkUser(route, state);

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkUser(route, state);
  }

  private checkUser(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogin: boolean = this.authenticationService.isLogin();
    if (isLogin && !_.includes(this.loginNotRequiredPages, state.url)) {
      return true;
    } else if (isLogin && _.includes(this.loginNotRequiredPages, state.url)) {
      this.router.navigate(['/home']);
      return true;
    } else if (!isLogin && !_.includes(this.loginNotRequiredPages, state.url)) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    } else {
      return true;
    }
  }
}

