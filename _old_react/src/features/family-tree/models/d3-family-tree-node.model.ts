import { FilledFamilyNode } from "../../../store/features/family-tree/models/filled-family-node.model";

export interface D3FamilyTreeNodeModel extends FilledFamilyNode {
  children: D3FamilyTreeNodeModel[] | null;
  expanded: boolean;
}
