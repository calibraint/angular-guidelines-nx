import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  public headers: HttpHeaders;
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Append headers
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Access-Control-Allow-Headers', 'Origin, Authorization, Content-Type, Accept');

    request = request.clone({
      headers: this.headers
    });

    const currentUser: string = localStorage.getItem('token');
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }
    return next.handle(request);
  }
}
