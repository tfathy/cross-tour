import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,  of } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { IUserReponsibility } from '../model/IUserReponsibility.model';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../login/model/lLoginInfo.model';
import { IUserApp } from '../model/IUserApp.model';


@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  private _url = '/assets/data/user-responsibility.json';
   private _loginInfo = new BehaviorSubject<LoginInfo>(null);
   userAuthApps: IUserApp [];



  constructor(private http: HttpClient) {}

  getUserReponsibility(respId: number): Observable<IUserReponsibility> {
    let logininfo;
    return this.http.get<IUserReponsibility>(this._url).pipe(
      take(1),
      tap((data) => {
        logininfo = new LoginInfo(
          data.user,
          data.responsibility,
          data.defFunction,
          data.trnFunction,
          data.repFunction,
          data.userApps
        );
        this._loginInfo.next(logininfo);
      })
    );
  }
  getLoginInfo() {
    return this._loginInfo.asObservable;
  }
}
