import { configureStore, Store } from "@reduxjs/toolkit";
import { interfaces } from "inversify";
import { createEpicMiddleware, Epic } from "redux-observable";
import { BindingTypes } from "@features/common/binding/binding.types";
import { authReducer } from "@store/features/auth/auth.reducer";
import { familyTreeReducer } from "@store/features/family-tree/family-tree.reducer";

export function rootStoreFactory(context: interfaces.Context): Store {
  const epicMiddleware = createEpicMiddleware();
  const store = configureStore({
    reducer: {
      family: familyTreeReducer,
      auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
      }).concat(epicMiddleware),
  });

  const rootEpic = context.container.get<Epic>(BindingTypes.ROOT_EPIC);
  epicMiddleware.run(rootEpic);
  return store;
}
