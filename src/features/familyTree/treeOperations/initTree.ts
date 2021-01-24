import cloneDeep from "lodash/cloneDeep"
import {FamilyNode} from "../models/FamilyNode.model";
import {ProcessedFamilyNode} from "../models/ProcessedFamilyNode.model";

export function initTree(root: FamilyNode): ProcessedFamilyNode {
    const newRoot: ProcessedFamilyNode = cloneDeep(root);
    expandFirstNodeInLevel(newRoot);
    return newRoot;
}

function expandFirstNodeInLevel(root: ProcessedFamilyNode): void {
    if (!root.children) {
        return;
    }
    let levelWasExpanded = false;
    root.children.map(
        (child) => {
            if (child.children) {
                if (child.options?.expandable)
                    if (!levelWasExpanded) {
                        levelWasExpanded = true;
                        child.expanded = true;
                        expandFirstNodeInLevel(child);
                    } else {
                        child.expanded = false;
                        child._children = child.children;
                        child.children = null;
                    }
            }
        }
    )
}