import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from '@angular-guidelines-nx/calibraint'

/**
 * Prefixes all requests with `environment.apiBase`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  protected environment: Environment;
  constructor(@Inject('AppEnvironment') environmentConfig) {
    this.environment = environmentConfig;
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exclude TranslateModule Url
    if (!request.url.startsWith('.')) {
      request = request.clone({ url: this.environment.apiBase + request.url });
    }
    return next.handle(request);
  }

}
