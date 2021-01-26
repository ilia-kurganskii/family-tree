import { Image } from "./image.model";

export interface FamilyNode {
  id?: string;
  name: string;
  description?: string;
  details?: {
    images: Image[];
    markdown: string;
  };
  firstParent?: FamilyNode;
  secondParent?: FamilyNode;
  options?: {
    expandable?: boolean;
  };
  children?: FamilyNode[] | null;
}
