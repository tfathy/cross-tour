import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthent } from '../model/IAuthent.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class AuthentService {

  private _url = '/assets/data/authenticate-user.json';
  

  constructor(private http: HttpClient) {}

  authenticateUser(username: string, password: string): Observable<IAuthent> {
    return this.http.get<IAuthent>(this._url);
  }
}
