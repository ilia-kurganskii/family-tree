import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../features/auth/services/auth/auth.service";
import { AuthActionsTypes } from "./auth.types";
import { UserModel } from "./models/user.model";

const loginUser = createAsyncThunk<
  UserModel,
  { email: string; password: string }
>(AuthActionsTypes.LOGIN_USER, async (payload, thunkApi) => {
  const { email, password } = payload;
  try {
    const user = await authService.login({ email, password });
    return user;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export const AuthAsyncActions = {
  loginUser,
};
