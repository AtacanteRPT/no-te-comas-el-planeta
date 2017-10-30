import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { GeneralService } from './general.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsuarioGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private generalService: GeneralService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('url : ' + url)
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    console.log('entrando en consulta por la  canLoad');

    let url = `/${route.path}`;
    console.log('url path: ' + url)

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('cargando ......');
    console.log('estado actual:' + this.generalService.estaLogueado);

    if (this.generalService.estadoLogin()) {
      this.generalService.setEstaLogueado(true);
      return true;
    }

    // Store the attempted URL for redirecting
    this.generalService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;

  }

}

