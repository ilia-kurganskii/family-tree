import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngxs/store';
import { catchError } from 'rxjs/operators';
import { AuthActions } from '../store/auth.actions';
import { AuthState } from '../store/auth.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly store: Store) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
      withCredentials: true,
    });
    return next.handle(newRequest).pipe(
      catchError((err) => {
        const isAuthenticated = this.store.selectSnapshot(
          AuthState.isAuthenticated
        );
        if ([401, 403].includes(err.status) && isAuthenticated) {
          // auto logout if 401 or 403 response returned from api
          this.store.dispatch(AuthActions.Logout);
        }

        const error = err?.error || { message: [err.statusCode] };
        return throwError(error);
      })
    );
  }
}
