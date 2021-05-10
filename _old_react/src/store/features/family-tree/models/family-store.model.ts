import { EntityState } from "@reduxjs/toolkit";
import { FamilyNode } from "./family-node.model";

export interface FamilyStoreModel {
  nodes: EntityState<FamilyNode>;
  selectedNodeId: string | null;
  expandedIds: string[];
}
