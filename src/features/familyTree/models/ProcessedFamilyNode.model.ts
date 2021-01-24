import {FamilyNode} from "./FamilyNode.model";

export interface ProcessedFamilyNode extends FamilyNode {
    children?: ProcessedFamilyNode[] | null;
    _children?: ProcessedFamilyNode[] | null;
}