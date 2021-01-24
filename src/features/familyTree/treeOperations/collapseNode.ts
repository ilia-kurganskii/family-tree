import {ProcessedFamilyNode} from "../models/ProcessedFamilyNode.model";

export function collapseNode(node: ProcessedFamilyNode): ProcessedFamilyNode {
    if (!node.children) {
        return node;
    }
    return {
        ...node,
        _children: node.children,
        children: null,
        options: {
            ...node.options,
            expanded: false
        }
    }
}