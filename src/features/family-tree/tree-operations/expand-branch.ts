import { ProcessedFamilyNode } from "../models/processed-family-node.model";
import { expandNode } from "./expand-node";
import { collapseNode } from "./collapse-node";

export function expandBranch(
  root: ProcessedFamilyNode,
  id: string
): ProcessedFamilyNode {
  const newRoot = findBranchAndExpand({ ...root }, id);
  return newRoot;
}

export function findBranchAndExpand(
  node: ProcessedFamilyNode,
  id: string
): ProcessedFamilyNode {
  if (!node.children) {
    return node;
  }
  const hasChildWithId = node.children.some((child) => child.id === id);
  if (hasChildWithId) {
    node.children = node.children.map((child) => {
      if (child.id === id) {
        return expandNode(child);
      } else {
        return collapseNode(child);
      }
    });
  } else {
    node.children = node.children.map((child) =>
      findBranchAndExpand(child, id)
    );
  }
  return node;
}
