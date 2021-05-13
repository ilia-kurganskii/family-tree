import { Image } from './image.model';

export interface FamilyNode {
  id: string;
  firstname: string;
  lastname?: string | null;
  description?: string | null;
  details?: {
    images: Image[];
    markdown: string;
  };
  options?: {
    expandable?: boolean;
  };
  parentIds: string[];
  childrenIds: string[];
  treeId: string;
}
