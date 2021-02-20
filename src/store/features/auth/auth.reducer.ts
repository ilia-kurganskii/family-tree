import { createReducer } from "@reduxjs/toolkit";
import { AuthAsyncActions } from "./auth.actions.thunk";
import { AuthStoreModel } from "./models/auth-store.model";

const initState: AuthStoreModel = {
  userId: null,
  isLogging: false,
};

export const authReducer = createReducer<AuthStoreModel>(
  initState,
  (builder) => {
    builder.addCase(AuthAsyncActions.loginUser.pending, (state) => ({
      ...state,
      userId: undefined,
      isLogging: true,
    }));
    builder.addCase(AuthAsyncActions.loginUser.fulfilled, (state, action) => ({
      ...state,
      userId: action.payload.id,
      isLogging: false,
    }));
    builder.addCase(AuthAsyncActions.loginUser.rejected, (state) => ({
      ...state,
      userId: null,
      isLogging: false,
    }));
  }
);
