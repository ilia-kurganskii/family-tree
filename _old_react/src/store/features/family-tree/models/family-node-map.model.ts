import { FamilyNode } from "./family-node.model";

export interface FamilyNodeMapModel {
  [id: string]: FamilyNode | undefined;
}
