import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: { Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l' }
    });
    return next.handle(authReq);
  }
}

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cacheReq = req.clone({
      setHeaders: { 'If-Modified-Since': 'Wed, 21 Oct 2015 07:28:00 GMT   ' }
    });
    
    return next.handle(cacheReq);
  }
}
