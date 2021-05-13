import { Store } from '@ngxs/store';
import { AuthActions } from './features/auth/store/auth.actions';
import { catchError, first } from 'rxjs/operators';

export function appInitializer(store: Store) {
  return () =>
    new Promise((resolve, reject) => {
      // attempt to refresh token on app start up to auto authenticate
      store
        .dispatch(AuthActions.Refresh)
        .pipe(
          first(),
          catchError((err) => store.dispatch(AuthActions.Logout))
        )
        .subscribe(resolve, reject);
    });
}
