import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../../store/features/auth/auth.actions";
import { AuthSelectors } from "../../../../store/features/auth/auth.selectors";

export function useLoginController() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.selectIsLoggedIn);

  const login = useCallback(
    () =>
      dispatch(
        AuthActions.loginUser({ email: "test@test.te", password: "password" })
      ),
    [dispatch]
  );
  return { isLoggedIn, login };
}
