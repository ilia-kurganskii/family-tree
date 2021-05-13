import { Injectable } from '@angular/core';
import { FamilyTreeStateModel } from './models/family-tree-state.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FamilyTreeService } from '../services/family-tree-service/family-tree.service';
import { FamilyTreeActions } from './family-tree.actions';
import { tap } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';
import { addEntities } from '../../shared/store/entity-operators';
import { FamilyTreeModel } from './models/family-tree.model';

@State<FamilyTreeStateModel>({
  name: 'familyTreeState',
  defaults: {
    treeEntities: {
      entities: {},
      ids: [],
    },
  },
})
@Injectable()
export class FamilyTreeState {
  constructor(private readonly familyTreeService: FamilyTreeService) {}

  @Selector()
  static selectTrees(state: FamilyTreeStateModel): FamilyTreeModel[] {
    return state.treeEntities.ids.map(
      (id: string) => state.treeEntities.entities[id]
    );
  }

  @Action(FamilyTreeActions.LoadTrees)
  loadTrees(ctx: StateContext<FamilyTreeStateModel>) {
    ctx.patchState({
      treeEntities: {
        entities: {},
        ids: [],
      },
    });
    return this.familyTreeService.loadTrees().pipe(
      tap((result) => {
        ctx.setState(
          patch({
            treeEntities: addEntities(result.trees),
          })
        );
      })
    );
  }
}
