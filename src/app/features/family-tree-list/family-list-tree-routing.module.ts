import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyTreeListPageComponent } from './pages/family-tree-list-page/family-tree-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyTreeListPageComponent,
  },
  {
    path: '/{treeId}/nodes',
    loadChildren: () =>
      import('../../features/family-nodes/family-nodes.module').then(
        (m) => m.FamilyNodesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyListTreeRoutingModule {}
