import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

const headers = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubjet: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;

  private loginPath: string = '/login';
  private logoutPath: string = '/logout';


  constructor(private http: HttpClient) {
    if(localStorage.getItem('token')){
      this.currentUserSubjet = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));
    }else{
      this.currentUserSubjet = new BehaviorSubject<Token>({token:null});
    }
    this.currentUser = this.currentUserSubjet.asObservable();
  }

  public getCurrentUser(){
    return this.currentUserSubjet.value;
  }

  login(send: Login):Observable<any>{
    return this.http.post<Token>(environment.backendURL+this.loginPath,send,headers).pipe(
      map(token=>{
        if (token && token.token !=""){
          localStorage.setItem('token',JSON.stringify(token));
          this.currentUserSubjet.next(token);
        }
        return token;
      }));
  }

  logout(){
    return this.http.get<{message:string}>(environment.backendURL+this.logoutPath).pipe(tap(
      ()=>{
        localStorage.removeItem('token');
        this.currentUserSubjet.next({token:null});
      }
    ));
  }
}


export interface Login{
  login:string;
  password:string;
}
export interface Token{
  token: string;
}