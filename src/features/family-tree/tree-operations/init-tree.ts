import cloneDeep from "lodash/cloneDeep";
import { FamilyNode } from "../models/family-node.model";
import { ProcessedFamilyNode } from "../models/processed-family-node.model";
import { collapseNode } from "./collapse-node";

export function initTree(root: FamilyNode): ProcessedFamilyNode {
  const newRoot: ProcessedFamilyNode = cloneDeep(root);
  collapseAllLevels(newRoot);
  return newRoot;
}

function collapseAllLevels(root: ProcessedFamilyNode): ProcessedFamilyNode {
  if (!root.children) {
    return root;
  }
  root.children = root.children.map((child) => {
    if (child.options?.expandable) {
      const handledNode = collapseAllLevels(child);
      return collapseNode(handledNode);
    }
    return collapseAllLevels(child);
  });
  return root;
}
