import { createAction } from "@reduxjs/toolkit";
import { AuthActionsTypes } from "./auth.types";

const loginUser = createAction<{ email: string; password: string }>(
  AuthActionsTypes.LOGIN_USER
);

const loginUserSuccess = createAction<{ userId: string }>(
  AuthActionsTypes.LOGIN_USER_SUCCESS
);
const loginUserFailed = createAction<{ error: string }>(
  AuthActionsTypes.LOGIN_USER_FAILED
);

export const AuthActions = {
  loginUser,
  loginUserSuccess,
  loginUserFailed,
};
