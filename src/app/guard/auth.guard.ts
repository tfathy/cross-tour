import { Injectable, ɵConsole } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthorizeService } from '../auth/service/authorize.service';
import { AuthentService } from '../auth/service/authent.service';
import { take, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authenticateService: AuthentService, private router: Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

   return    this.authenticateService.userIsAuthenticated.pipe(take(1),
      switchMap( isAuthenticated => {
        console.log('******AuthGuard isAuthenticated = ', isAuthenticated);
        return of(isAuthenticated);
      }),
      tap (isAuthenticated => {
        if (!isAuthenticated) {
          console.log('!isAuthenticated************');
          this.router.navigateByUrl('/login');
        }
      })
      );


  }
}
