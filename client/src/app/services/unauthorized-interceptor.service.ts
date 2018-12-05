import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { AuthService } from "./auth.service";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(catchError(err=>{
      if(err.status === 401) {
        this.auth.logout();
        location.reload(true);
      }

      const error = err.error.message || err.statusText
      return throwError(err);
    }))
  }
}
