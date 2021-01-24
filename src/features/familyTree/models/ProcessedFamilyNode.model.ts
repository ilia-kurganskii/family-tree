import { FamilyNode } from "./FamilyNode.model";

export interface ProcessedFamilyNode extends FamilyNode {
  expanded?: boolean;
  children?: ProcessedFamilyNode[] | null;
  _children?: ProcessedFamilyNode[] | null;
}
