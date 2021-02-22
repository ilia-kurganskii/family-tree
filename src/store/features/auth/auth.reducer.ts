import { createReducer } from "@reduxjs/toolkit";
import { AuthActions } from "./auth.actions";
import { AuthStoreModel } from "./models/auth-store.model";

const initState: AuthStoreModel = {
  userId: null,
  isLogging: false,
};

export const authReducer = createReducer<AuthStoreModel>(
  initState,
  (builder) => {
    builder.addCase(AuthActions.loginUser, (state) => ({
      ...state,
      userId: undefined,
      isLogging: true,
    }));
    builder.addCase(AuthActions.loginUserSuccess, (state, action) => ({
      ...state,
      userId: action.payload.userId,
      isLogging: false,
    }));
    builder.addCase(AuthActions.loginUserFailed, (state) => ({
      ...state,
      userId: null,
      isLogging: false,
    }));
  }
);
