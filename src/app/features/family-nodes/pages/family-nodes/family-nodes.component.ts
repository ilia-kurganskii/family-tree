import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FamilyNodeState } from '../../store/family-node.state';
import { Observable } from 'rxjs';
import { D3FamilyTreeNodeModel } from '../../components/family-tree-chart/models/d3-family-tree-node.model';
import { filledFamilyNodeToD3FamilyNode } from './family-nodes.dto';
import { map } from 'rxjs/operators';
import { FilledFamilyNode } from '../../store/models/filled-family-node.model';
import { combineLatest } from 'rxjs';
import { FamilyNodeActions } from '../../store/family-node.actions';

@Component({
  selector: 'ft-family-tree',
  templateUrl: './family-nodes.component.html',
  styleUrls: ['./family-nodes.component.scss'],
})
export class FamilyNodesComponent implements OnInit {
  @Select(FamilyNodeState.selectDescendingFamilyTree)
  descendingFamilyTree$!: Observable<FilledFamilyNode>;

  @Select(FamilyNodeState.selectExpandedIds)
  expandedIds$!: Observable<string[]>;

  rootNode$!: Observable<D3FamilyTreeNodeModel>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.rootNode$ = combineLatest([
      this.descendingFamilyTree$,
      this.expandedIds$,
    ]).pipe(
      map(([rootNode, expandedIds]) =>
        filledFamilyNodeToD3FamilyNode(rootNode, expandedIds)
      )
    );

    this.store.dispatch(FamilyNodeActions.LoadNodesByTreeId);
  }
}
