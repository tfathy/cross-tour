import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency } from '../model/gl-def/ICurrency.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlDefService {
  private _url = '/assets/data/currency.json';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ICurrency[]>(this._url);
  }
}
