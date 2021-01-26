import { FamilyNode } from "./family-node.model";

export interface ProcessedFamilyNode extends FamilyNode {
  expanded?: boolean;
  children?: ProcessedFamilyNode[] | null;
  _children?: ProcessedFamilyNode[] | null;
}
