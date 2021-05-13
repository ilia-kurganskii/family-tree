import { Injectable } from '@angular/core';
import { FamilyTreeStateModel } from './models/family-tree-state.model';
import { Action, State, StateContext } from '@ngxs/store';
import { FamilyTreeService } from '../services/family-tree-service/family-tree.service';
import { FamilyTreeActions } from './family-tree.actions';
import { tap } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';
import { addEntities } from '../../shared/store/entity-operators';

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
