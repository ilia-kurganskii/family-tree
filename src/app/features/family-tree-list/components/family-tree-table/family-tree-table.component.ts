import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FamilyTreeActions } from '../../store/family-tree.actions';
import { FamilyTreeState } from '../../store/family-tree.state';
import { Observable } from 'rxjs';
import { FamilyTreeModel } from '../../store/models/family-tree.model';

@Component({
  selector: 'ft-family-tree-table',
  templateUrl: './family-tree-table.component.html',
  styleUrls: ['./family-tree-table.component.scss'],
})
export class FamilyTreeTableComponent implements OnInit {
  @Select(FamilyTreeState.selectTrees)
  trees$!: Observable<FamilyTreeModel[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(FamilyTreeActions.LoadTrees);
  }
}
