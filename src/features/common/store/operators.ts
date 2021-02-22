import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { OperatorFunction } from "rxjs";
import { filter } from "rxjs/operators";

export function ofType<T>(
  actionWithPayload: ActionCreatorWithPayload<T>
): OperatorFunction<Action, PayloadAction<T>> {
  return filter(
    (nextAction: Action) => nextAction.type === actionWithPayload.type
  ) as OperatorFunction<Action, PayloadAction<T>>;
}
