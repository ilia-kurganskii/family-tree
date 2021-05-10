import { FamilyNode } from './family-node.model';

export interface FamilyStoreModel {
  selectedNodeId: string | null;
  expandedIds: string[];
}
