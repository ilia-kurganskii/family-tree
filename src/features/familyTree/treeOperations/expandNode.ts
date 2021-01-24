import {ProcessedFamilyNode} from "../models/ProcessedFamilyNode.model";

export function expandNode(node: ProcessedFamilyNode):ProcessedFamilyNode{
    if (node.children) {
        return node;
    }
    return {
        ...node,
        children: node._children,
        _children: null,
        options:{
            ...node.options,
            expanded: true
        }
    }
}