import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    const token = this.auth.getCurrentUser().token;
    if(token && token != null && token!=""){
      return true;
    }
    this.router.navigate(['login']);
    console.log("Guard activated");
    return false;
  }
}
