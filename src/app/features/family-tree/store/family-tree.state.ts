import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { FamilyStateModel } from './models/family-state.model';

@State<FamilyStateModel>({
  name: 'familyTree',
  defaults: {
    nodes: [],
    selectedNodeId: null,
    expandedIds: [],
  },
})
@Injectable()
export class FamilyTreeState {}
