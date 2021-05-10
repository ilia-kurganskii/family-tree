import { AuthStoreModel } from "_old_react/src/store/features/auth/models/auth-store.model";
import { FamilyStoreModel } from "_old_react/src/store/features/family-tree/models/family-store.model";

export interface RootStoreModel {
  family: FamilyStoreModel;
  auth: AuthStoreModel;
}
