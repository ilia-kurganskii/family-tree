import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FamilyNodeStateModel } from './models/family-node-state.model';
import { FamilyNode } from './models/family-node.model';
import { FilledFamilyNode } from './models/filled-family-node.model';
import { buildDescendingFamilyTree } from './helpers/build-descending-tree';
import { tap } from 'rxjs/operators';
import { FamilyNodeService } from '../services/family-node/family-node.service';
import { addEntities } from '../../shared/store/entity-operators';
import { patch } from '@ngxs/store/operators';
import { mapServiceToStateFamilyModel } from './family-node.state.dto';
import { EntitiesMap } from '../../shared/store/entity-state.model';
import { FamilyNodeActions } from './family-node.actions';

@State<FamilyNodeStateModel>({
  name: 'familyTree',
  defaults: {
    nodeEntities: {
      entities: {},
      ids: [],
    },
    selectedNodeId: null,
    expandedIds: [],
  },
})
@Injectable()
export class FamilyNodeState {
  constructor(private readonly familyTreeService: FamilyNodeService) {}

  @Selector()
  static selectedNodeId(state: FamilyNodeStateModel): string | null {
    return state.selectedNodeId;
  }

  @Selector()
  static selectNodeMap(state: FamilyNodeStateModel): EntitiesMap<FamilyNode> {
    return state.nodeEntities.entities;
  }

  @Selector()
  static selectExpandedIds(state: FamilyNodeStateModel): string[] {
    return state.expandedIds;
  }

  @Selector([FamilyNodeState.selectedNodeId, FamilyNodeState.selectNodeMap])
  static selectDescendingFamilyTree(
    state: FamilyNodeStateModel,
    selectedNodeId: string,
    nodeMap: EntitiesMap<FamilyNode>
  ): FilledFamilyNode | null {
    return buildDescendingFamilyTree(selectedNodeId, nodeMap);
  }

  @Action(FamilyNodeActions.LoadNodesByTreeId)
  loadNodesByTreeId(
    ctx: StateContext<FamilyNodeStateModel>,
    action: FamilyNodeActions.LoadNodesByTreeId
  ) {
    ctx.patchState({
      nodeEntities: {
        entities: {},
        ids: [],
      },
    });
    return this.familyTreeService.loadNodesByTree(action.payload.treeId).pipe(
      tap((result) => {
        ctx.setState(
          patch({
            nodeEntities: addEntities(
              result.nodes.map(mapServiceToStateFamilyModel)
            ),
          })
        );
      })
    );
  }
}
