import { configureStore } from "@reduxjs/toolkit";
import { familyTreeReducer } from "./features/family-tree/family-tree.reducer";
import { RootStoreModel } from "./root.model";

export const rootStore = configureStore<RootStoreModel>({
  reducer: {
    family: familyTreeReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
