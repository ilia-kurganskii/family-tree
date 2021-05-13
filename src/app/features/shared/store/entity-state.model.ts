export interface ObjectWithId {
  id: string;
}

export interface EntitiesMap<T extends ObjectWithId> {
  [id: string]: T;
}

export interface EntitiesStateModel<T extends ObjectWithId> {
  entities: EntitiesMap<T>;
  ids: string[];
}
