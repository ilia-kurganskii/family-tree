import { Image } from "./image.model";

export interface FamilyNode {
  id: string;
  name: string;
  description?: string;
  details?: {
    images: Image[];
    markdown: string;
  };
  firstParentId?: string | null;
  secondParentId?: string | null;
  options?: {
    expandable?: boolean;
  };
  childrenIds: string[];
}
