import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthent } from '../model/IAuthent.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from '../model/IUser.model';
import { map, tap } from 'rxjs/operators';
import { AppUser } from '../model/AppUser.model';




@Injectable({
  providedIn: 'root',
})
export class AuthentService {
  private _userIsAuthenticated = false;
  private _user = new BehaviorSubject<IUser>(null);

  private _url = '/assets/data/authenticate-user.json';
  

  constructor(private http: HttpClient) {}

  authenticateUser(username: string, password: string): Observable<IAuthent> {
    return this.http.get<IAuthent>(this._url).pipe(tap(this.setUserData.bind(this)));
  }

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
  
  private setUserData(userData: IAuthent) {
    const user = new AppUser(
      userData.empId,
      userData.username,
      userData.empId,
      userData.empName,
      userData.personType,
      'temptoken'
    );
    this._user.next(user);
  }

}
