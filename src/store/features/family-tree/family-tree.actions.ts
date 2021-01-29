import { createAction } from "@reduxjs/toolkit";
import { FamilyTreeActionTypes } from "./family-tree.types";

const selectNode = createAction<{ nodeId: string }>(
  FamilyTreeActionTypes.SELECT_NODE
);
const expandBranch = createAction<{ nodeId: string }>(
  FamilyTreeActionTypes.EXPAND_BRANCH
);
const collapseBranch = createAction<{ nodeId: string }>(
  FamilyTreeActionTypes.COLLAPSE_BRANCH
);
const toggleBranch = createAction<{ nodeId: string }>(
  FamilyTreeActionTypes.TOGGLE_BRANCH
);

export const FamilyTreeActions = {
  selectNode,
  expandBranch,
  collapseBranch,
  toggleBranch,
};
