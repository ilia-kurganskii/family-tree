import {ProcessedFamilyNode} from "../models/ProcessedFamilyNode.model";

export function expandNode(node: ProcessedFamilyNode):ProcessedFamilyNode{
    if (node.children) {
        return {
            ...node,
            expanded: true
        };
    }
    return {
        ...node,
        children: node._children,
        _children: null,
        expanded: true
    }
}