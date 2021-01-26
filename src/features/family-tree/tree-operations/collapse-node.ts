import { ProcessedFamilyNode } from "../models/processed-family-node.model";

export function collapseNode(node: ProcessedFamilyNode): ProcessedFamilyNode {
  if (!node.children) {
    return {
      ...node,
      expanded: false,
    };
  }
  return {
    ...node,
    _children: node.children,
    children: null,
    expanded: false,
  };
}
