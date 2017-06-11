import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ApiConstant } from '../constants/api.constants';

@Injectable()
export class CartService {

  private headers: Headers;
  private actionUrl: string;

  constructor(private _http: Http, private apiConstant: ApiConstant) {
    this.actionUrl = `${apiConstant.Server}Values/`;
  }

  public Delete = (id: number): Observable<Response> => {
    return this._http.delete(this.actionUrl + id, {
      headers: this.headers
    });
  }

}
