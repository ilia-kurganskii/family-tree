import { FamilyNode } from './family-node.model';

export interface FamilyStateModel {
  nodes: FamilyNode[];
  selectedNodeId: string | null;
  expandedIds: string[];
}
