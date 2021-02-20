import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/auth.reducer";
import { familyTreeReducer } from "./features/family-tree/family-tree.reducer";
import { RootStoreModel } from "./root.model";

export const rootStore = configureStore<RootStoreModel>({
  reducer: {
    family: familyTreeReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof rootStore.dispatch;
