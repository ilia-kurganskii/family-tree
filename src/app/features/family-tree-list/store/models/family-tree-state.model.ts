import { FamilyTreeModel } from './family-tree.model';
import { EntitiesStateModel } from '../../../shared/store/entity-state.model';

export interface FamilyTreeStateModel {
  treeEntities: EntitiesStateModel<FamilyTreeModel>;
}
