import { FamilyNodeMapModel } from "../models/family-node-map.model";
import { FilledFamilyNode } from "../models/filled-family-node.model";

export function buildDescendingFamilyTree(
  rootId: string,
  nodeMap: FamilyNodeMapModel
): FilledFamilyNode | null {
  const node = nodeMap[rootId];
  if (node) {
    const newNode: FilledFamilyNode = { ...node, branches: null };
    if (newNode.childrenIds) {
      newNode.branches = newNode.childrenIds
        .map(
          (childNode) =>
            buildDescendingFamilyTree(childNode, nodeMap) as FilledFamilyNode
        )
        .filter(Boolean);
    }
    if (newNode.parentIds.length > 0) {
      newNode.firstParent = nodeMap[newNode.parentIds[0]];
    }
    if (newNode.parentIds.length > 1) {
      newNode.secondParent = nodeMap[newNode.parentIds[1]];
    }
    return newNode;
  }
  return null;
}
