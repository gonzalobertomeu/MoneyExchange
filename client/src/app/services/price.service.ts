import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  private urlDolar = "/prices/usd";


  getLastPrice(): Observable<Price>{
    return this.http.get<Price>(environment.backendURL+this.urlDolar);
  }


}

export interface Price{
  d: string;
  v: number;
}