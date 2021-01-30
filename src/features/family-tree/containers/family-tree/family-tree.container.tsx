import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { FamilyTreeActions } from "../../../../store/features/family-tree/family-tree.actions";
import { FamilyTreeSelectors } from "../../../../store/features/family-tree/family-tree.selectors";
import { RootStoreModel } from "../../../../store/features/root.model";
import FamilyTreeBuilderComponent from "../../components/familty-tree-builder/family-tree-builder.component";
import { D3FamilyTreeNodeModel } from "../../models/d3-family-tree-node.model";
import { filledFamilyNodeToD3FamilyNode } from "./family-tree.dto";

interface FamilyTreeProps {
  tree: D3FamilyTreeNodeModel | null;
  toggleNode: (nodeId: string) => void;
  className?: string;
}

function FamilyTreeContainerComponent({
  toggleNode,
  tree,
  className,
}: FamilyTreeProps) {
  const expandBranchCallback = useCallback(
    (id: string) => {
      toggleNode(id);
    },
    [toggleNode]
  );

  if (!tree) {
    return null;
  }

  return (
    <FamilyTreeBuilderComponent
      className={className}
      onExpandBranch={expandBranchCallback}
      root={tree}
    />
  );
}

const mapStateToProps = (state: RootStoreModel) => {
  const filledFamilyRootNode = FamilyTreeSelectors.selectDescendingFamilyTree(
    state
  );
  const expandedIds = FamilyTreeSelectors.selectExpandedIds(state);

  let d3FamilyRootNode = null;
  if (filledFamilyRootNode) {
    d3FamilyRootNode = filledFamilyNodeToD3FamilyNode(
      filledFamilyRootNode,
      expandedIds
    );
  }
  return {
    tree: d3FamilyRootNode,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleNode: (nodeId: string) =>
    dispatch(FamilyTreeActions.toggleBranch({ nodeId })),
});

export const FamilyTreeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyTreeContainerComponent);
