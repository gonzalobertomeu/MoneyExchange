import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
    let currentUser = this.auth.getCurrentUser();
    if (currentUser && currentUser.token){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}
