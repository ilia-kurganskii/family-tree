import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthStateModel } from './auth.state.model';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthActions } from './auth.actions';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BackendErrorModel } from '../../shared/models/backend-error.model';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticate: false,
    username: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {}

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return state.isAuthenticate;
  }

  @Selector()
  static loginError(state: AuthStateModel): BackendErrorModel | undefined {
    return state.error;
  }

  @Action(AuthActions.LoginByEmail)
  login(ctx: StateContext<AuthStateModel>, action: AuthActions.LoginByEmail) {
    ctx.patchState({
      error: undefined,
    });
    return this.authService.loginByEmail(action.payload).pipe(
      tap((result) => {
        ctx.patchState({
          isAuthenticate: true,
          username: result.username,
        });
      }),
      catchError((error) => {
        ctx.patchState({
          error,
        });
        return of('');
      })
    );
  }

  @Action(AuthActions.Refresh)
  refreshToken(ctx: StateContext<AuthStateModel>) {
    return this.authService.refreshToken().pipe(
      tap(() => {
        ctx.patchState({
          isAuthenticate: true,
        });
      })
    );
  }

  @Action(AuthActions.Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(
      tap(() => {
        ctx.setState({
          isAuthenticate: false,
          username: null,
        });
      })
    );
  }
}
