import "reflect-metadata";
import { Store } from "@reduxjs/toolkit";
import { Container } from "inversify";
import { Epic } from "redux-observable";
import { AuthService } from "_old_react/src/features/auth/services/auth/auth.service";
import { BindingTypes } from "_old_react/src/features/common/binding/binding.types";
import { HttpService } from "_old_react/src/features/common/http/http.service";
import { AuthEpics } from "_old_react/src/store/features/auth/auth.epic";
import { rootEpicFactory } from "_old_react/src/store/root.epic";
import { rootStoreFactory } from "_old_react/src/store/root.store";
import { createBrowserHistory } from "history";

const container = new Container();
container.bind(HttpService).toSelf().inSingletonScope();
container.bind(AuthService).toSelf().inSingletonScope();
container.bind(AuthEpics).toSelf().inSingletonScope();
container.bind<Epic>(BindingTypes.ROOT_EPIC).toDynamicValue(rootEpicFactory);
container.bind<Store>(BindingTypes.ROOT_STORE).toDynamicValue(rootStoreFactory);
container.bind(BindingTypes.HISTORY).toConstantValue(createBrowserHistory());

export { container };
