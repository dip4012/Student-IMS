import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AddTokenService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('id_token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    return next.handle(req);
  }
}
