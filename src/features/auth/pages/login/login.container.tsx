import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { AuthActions } from "../../../../store/features/auth/auth.actions";
import { FamilyTreeActions } from "../../../../store/features/family-tree/family-tree.actions";
import { LoginPayload } from "./login.types";

interface LoginPageProps {
  onLogin: (payload: LoginPayload) => void;
}

function LoginPageComponent(props: LoginPageProps) {
  const onLoginClick = useCallback(
    () => props.onLogin({ email: "test@test.te", password: "password" }),
    [props.onLogin]
  );

  return (
    <div>
      <button onClick={onLoginClick}>LOGIN</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onLogin: (payload: LoginPayload) =>
    dispatch(
      AuthActions.loginUser({
        email: payload.email,
        password: payload.password,
      })
    ),
});

export const LoginPageContainer = connect(
  undefined,
  mapDispatchToProps
)(LoginPageComponent);
