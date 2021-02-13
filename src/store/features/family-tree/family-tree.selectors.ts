import { createSelector } from "@reduxjs/toolkit";
import { RootStoreModel } from "../../root.model";
import { nodesAdapter } from "./family-tree.reducer";
import { buildDescendingFamilyTree } from "./tree-builder/build-descending-tree";

const selectFeatureState = (state: RootStoreModel) => state.family;

const selectNodes = createSelector(selectFeatureState, (state) => state.nodes);

const entitySelectors = nodesAdapter.getSelectors(selectNodes);

const selectEntities = entitySelectors.selectEntities;

const selectSelectedNodeId = createSelector(
  selectFeatureState,
  (state) => state.selectedNodeId
);

const selectExpandedIds = createSelector(
  selectFeatureState,
  (state) => state.expandedIds
);

const selectDescendingFamilyTree = createSelector(
  selectSelectedNodeId,
  selectEntities,
  (selectedNodeId, nodeMap) => {
    if (selectedNodeId === null) {
      return null;
    }
    return buildDescendingFamilyTree(selectedNodeId, nodeMap);
  }
);

export const FamilyTreeSelectors = {
  selectDescendingFamilyTree,
  selectSelectedNodeId,
  selectExpandedIds,
};
