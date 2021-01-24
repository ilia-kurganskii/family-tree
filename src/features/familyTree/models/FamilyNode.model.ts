export interface FamilyNode {
    id: string;
    name: string;
    description?: string;
    secondParent?: {
        name: string,
        description?: string;
    },
    options?: {
        expandable?: boolean
    }
    children?: FamilyNode[] | null
}