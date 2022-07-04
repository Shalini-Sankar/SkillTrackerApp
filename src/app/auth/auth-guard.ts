import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('AdminUser'))
      {
          // logged in so return true
          return true;
      }
      else if(localStorage.getItem('EmployeeUser'))
      {
  // logged in so return true
          return true;
      }
      // not logged in so redirect to login page
      this.router.navigate(['/']);
      return false;
  }
  
}
