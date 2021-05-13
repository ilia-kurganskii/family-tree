import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Actions,
  ofActionDispatched,
  ofActionSuccessful,
  Select,
  Selector,
  Store,
} from '@ngxs/store';
import { AuthActions } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.state';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil, withLatestFrom } from 'rxjs/operators';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { TuiValidationError } from '@taiga-ui/cdk';

@Component({
  selector: 'ft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'This is required field',
        email: 'Please use email',
      },
    },
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  @Select(AuthState.isLoading)
  isLoading$!: Observable<boolean>;

  loginError$!: Observable<TuiValidationError | null>;

  emailControl = new FormControl('email@gmail.com', [
    Validators.email,
    Validators.required,
  ]);

  loginForm: FormGroup = new FormGroup({
    email: this.emailControl,
    password: new FormControl('pa$word1', [Validators.required]),
  });

  private ngUnsubscribe = new Subject();

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actions$
      .pipe(
        ofActionSuccessful(AuthActions.LoginByEmail),
        withLatestFrom(this.route.queryParams),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(([, queryParams]) => {
        const returnUrl: string = queryParams.returnUrl ?? '/tree';
        this.router.navigate([returnUrl]);
      });

    this.loginError$ = this.store
      .select(AuthState.loginError)
      .pipe(
        map((errorMessage) =>
          errorMessage ? new TuiValidationError(errorMessage.message[0]) : null
        )
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    this.store.dispatch(new AuthActions.LoginByEmail(this.loginForm.value));
  }
}
