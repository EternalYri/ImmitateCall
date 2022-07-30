import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate{
  constructor( private auth: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    // return this.auth.flag;
    return true;
  }
}
