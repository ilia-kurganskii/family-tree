import { FamilyNode } from './family-node.model';
import { EntitiesStateModel } from '../../../shared/store/entity-state.model';

export interface FamilyNodeStateModel {
  nodeEntities: EntitiesStateModel<FamilyNode>;
  selectedNodeId: string | null;
  expandedIds: string[];
}
