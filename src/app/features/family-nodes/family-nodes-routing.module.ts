import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyNodesComponent } from './pages/family-nodes/family-nodes.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyNodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyNodesRoutingModule {}
