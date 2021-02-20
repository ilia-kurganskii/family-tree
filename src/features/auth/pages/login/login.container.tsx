import { unwrapResult } from "@reduxjs/toolkit";
import React, { useCallback } from "react";
import { connect } from "react-redux";
import { AuthAsyncActions } from "../../../../store/features/auth/auth.actions.thunk";
import { UserModel } from "../../../../store/features/auth/models/user.model";
import { AppDispatch } from "../../../../store/root.store";
import { LoginPayload } from "./login.types";
import { useHistory } from "react-router-dom";

interface LoginPageProps {
  login: (payload: LoginPayload) => Promise<UserModel>;
}

function LoginPageComponent(props: LoginPageProps) {
  const history = useHistory();
  const onLoginClick = useCallback(async () => {
    try {
      const user = await props.login({
        email: "test@test.te",
        password: "password",
      });
      console.log("Login success", user);
      history.push("/trees");
    } catch (e) {
      console.log(e);
    }
  }, [props.login]);

  return (
    <div>
      <button onClick={onLoginClick}>LOGIN</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (payload: LoginPayload) =>
    dispatch(
      AuthAsyncActions.loginUser({
        email: payload.email,
        password: payload.password,
      })
    ).then(unwrapResult),
});

export const LoginPageContainer = connect(
  undefined,
  mapDispatchToProps
)(LoginPageComponent);
