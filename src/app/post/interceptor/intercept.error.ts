import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(

      tap(evt => {
        console.log('evt', evt)
        if (evt instanceof HttpResponse) {
          if (evt.body)
            if (evt.body.success)
              alert(evt.body.success.message);
            else if (evt.body.error)
              alert(evt.body.error);
        };
      }),
      catchError((err: any) => {
        console.log('err', err)
        if (err instanceof HttpErrorResponse) {
          try {
            alert(err.message);
          } catch (e) {
            alert(err.error.error);
          };
        };
        return of(err);
      }));
  };
};