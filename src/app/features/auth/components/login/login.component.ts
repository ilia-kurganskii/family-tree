import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { AuthActions } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.state';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'ft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
  emailControl = new FormControl('email@gmail.com', [
    Validators.required,
    Validators.email,
  ]);

  formControl: FormGroup = new FormGroup({
    email: this.emailControl,
    password: new FormControl('pa$word1'),
  });

  loginError$ = this.store.select(AuthState.loginError);

  private ngUnsubscribe = new Subject();

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
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
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  submit() {
    this.store.dispatch(new AuthActions.LoginByEmail(this.formControl.value));
  }
}
