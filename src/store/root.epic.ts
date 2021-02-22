import { interfaces } from "inversify";
import { combineEpics, Epic } from "redux-observable";
import { AuthEpics } from "./features/auth/auth.epic";

export function rootEpicFactory(context: interfaces.Context): Epic {
  const authEpics = context.container.get(AuthEpics).createEpic();

  return combineEpics(authEpics);
}
