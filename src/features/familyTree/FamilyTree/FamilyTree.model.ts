
export interface FamilyNode {
    name: string;
    description?: string;
    secondParent?: {
        name: string,
        description?: string;
    },
    options?: {
        expandable?: boolean,
        expanded?: boolean
    }
    children?: FamilyNode[]
}

export interface FamilyTreeData {
    root: FamilyNode
}

export interface FamilyTreeProps {
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
    marginTop?: number;
    data?: FamilyTreeData;
}
