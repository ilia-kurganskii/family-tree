import { ProcessedFamilyNode } from "../models/ProcessedFamilyNode.model";
import { expandNode } from "./expandNode";
import { collapseNode } from "./collapseNode";

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
