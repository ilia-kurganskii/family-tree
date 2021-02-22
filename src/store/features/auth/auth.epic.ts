import { inject, injectable } from "inversify";
import { combineEpics, Epic } from "redux-observable";
import { of } from "rxjs";
import {
  catchError,
  ignoreElements,
  map,
  switchMap,
  tap,
} from "rxjs/operators";
import { AuthService } from "@features/auth/services/auth/auth.service";
import { BindingTypes } from "@features/common/binding/binding.types";
import { ofType } from "@features/common/store/operators";
import { AuthActions } from "./auth.actions";
import { History } from "history";

@injectable()
export class AuthEpics {
  @inject(AuthService)
  private readonly authService!: AuthService;

  @inject(BindingTypes.HISTORY)
  private readonly history!: History;

  public createEpic(): Epic {
    return combineEpics(
      this.loginUserEpic(),
      this.navigateToNextPageAfterLoginEpic()
    );
  }

  private loginUserEpic(): Epic {
    return (action$) =>
      action$.pipe(
        ofType(AuthActions.loginUser),
        switchMap((action) => {
          return this.authService
            .login({
              email: action.payload.email,
              password: action.payload.password,
            })
            .pipe(
              map((user) =>
                AuthActions.loginUserSuccess({
                  userId: user.id,
                })
              ),
              catchError((error) =>
                of(
                  AuthActions.loginUserFailed({
                    error,
                  })
                )
              )
            );
        })
      );
  }

  private navigateToNextPageAfterLoginEpic(): Epic {
    return (action$) =>
      action$.pipe(
        ofType(AuthActions.loginUserSuccess),
        tap(() => this.history.push("/trees")),
        ignoreElements()
      );
  }
}
