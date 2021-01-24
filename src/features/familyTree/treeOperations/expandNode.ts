import {ProcessedFamilyNode} from "../models/ProcessedFamilyNode.model";

export function expandNode(node: ProcessedFamilyNode):ProcessedFamilyNode{
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