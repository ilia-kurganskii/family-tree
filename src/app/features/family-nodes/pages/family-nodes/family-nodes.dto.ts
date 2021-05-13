import { FilledFamilyNode } from '../../store/models/filled-family-node.model';
import { D3FamilyTreeNodeModel } from '../../components/family-tree-chart/models/d3-family-tree-node.model';

export function filledFamilyNodeToD3FamilyNode(
  root: FilledFamilyNode,
  expandedIds: string[]
): D3FamilyTreeNodeModel {
  const isExpanded = expandedIds.includes(root.id);
  const node: D3FamilyTreeNodeModel = {
    ...root,
    children: null,
    expanded: isExpanded,
  };
  if (root.options?.expandable && !isExpanded) {
    return node;
  }
  if (root.branches) {
    node.children = root.branches.map((branch) =>
      filledFamilyNodeToD3FamilyNode(branch, expandedIds)
    );
  }
  return node;
}
