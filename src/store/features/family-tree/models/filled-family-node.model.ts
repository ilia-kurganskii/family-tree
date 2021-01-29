import { FamilyNode } from "./family-node.model";

export interface FilledFamilyNode extends FamilyNode {
  firstParent?: FamilyNode;
  secondParent?: FamilyNode;
  branches: FilledFamilyNode[] | null;
}
