import { AuthStoreModel } from "@store/features/auth/models/auth-store.model";
import { FamilyStoreModel } from "@store/features/family-tree/models/family-store.model";

export interface RootStoreModel {
  family: FamilyStoreModel;
  auth: AuthStoreModel;
}
