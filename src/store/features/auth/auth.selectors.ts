import { createSelector } from "@reduxjs/toolkit";
import { RootStoreModel } from "../../root.model";

const selectFeatureState = (state: RootStoreModel) => state.auth;

const selectIsLoggedIn = createSelector(
  selectFeatureState,
  (state) => !!state.userId
);

export const AuthSelectors = {
  selectIsLoggedIn,
};
