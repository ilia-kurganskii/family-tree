import { createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { FamilyTreeActions } from "./family-tree.actions";
import { FamilyNode } from "./models/family-node.model";
import { FamilyStoreModel } from "./models/family-store.model";
import { mockNodes } from "./models/family-store.model.mock";
import { buildDescendingFamilyTree } from "./tree-builder/build-descending-tree";

export const nodesAdapter = createEntityAdapter<FamilyNode>({
  selectId: (node) => node.id,
});

const initState: FamilyStoreModel = {
  nodes: nodesAdapter.addMany(nodesAdapter.getInitialState(), mockNodes),
  selectedNodeId: "0",
  expandedIds: [],
};

export const familyTreeReducer = createReducer<FamilyStoreModel>(
  initState,
  (builder) => {
    builder
      .addCase(FamilyTreeActions.selectNode, (state, action) => ({
        ...state,
        selectedNodeId: action.payload.nodeId,
      }))
      .addCase(FamilyTreeActions.toggleBranch, (state, action) => {
        const { nodeId } = action.payload;
        const isExpanded = state.expandedIds.includes(nodeId);
        if (isExpanded) {
          return {
            ...state,
            expandedIds: state.expandedIds.filter((id) => id !== nodeId),
          };
        } else {
          // collapse other levels
          const node = state.nodes.entities[nodeId];
          const idsForRemove: string[] = [];
          if (node && node.firstParentId) {
            const parent = state.nodes.entities[node.firstParentId];
            if (parent) {
              idsForRemove.push(...parent.childrenIds);
            }
          }
          return {
            ...state,
            expandedIds: state.expandedIds
              .filter((id) => !idsForRemove.includes(id))
              .concat(nodeId),
          };
        }
      });
  }
);
