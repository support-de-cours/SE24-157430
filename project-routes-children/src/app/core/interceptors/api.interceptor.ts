import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const url = `${environment.pokeapi_base_url}${request.url}`;

    console.log( url );
    
    const req = request.clone({
      url: url
    })

    return next.handle(req);
  }
}
