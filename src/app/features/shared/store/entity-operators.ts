import { append, patch } from '@ngxs/store/operators';
import { StateOperator } from '@ngxs/store';
import { PatchSpec } from '@ngxs/store/operators/patch';
import {
  EntitiesMap,
  EntitiesStateModel,
  ObjectWithId,
} from './entity-state.model';

export function addEntities<T extends ObjectWithId>(
  entities: T[]
): StateOperator<EntitiesStateModel<T>> {
  const additionMap: PatchSpec<EntitiesMap<T>> = entities.reduce(
    (newMap: EntitiesMap<T>, entity) => {
      newMap[entity.id] = entity;
      return newMap;
    },
    {}
  );
  const additionalIds = entities.map((entity) => entity.id);
  return patch<EntitiesStateModel<T>>({
    // @ts-ignore
    entities: patch(additionMap),
    ids: append(additionalIds),
  });
}
