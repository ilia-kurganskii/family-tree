import { AuthStoreModel } from "./features/auth/models/auth-store.model";
import { FamilyStoreModel } from "./features/family-tree/models/family-store.model";

export interface RootStoreModel {
  family: FamilyStoreModel;
  auth: AuthStoreModel;
}
