import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyNodesComponent } from './pages/family-nodes/family-nodes.component';
import { FamilyNodesRoutingModule } from './family-nodes-routing.module';
import { FamilyTreeChartComponent } from './components/family-tree-chart/family-tree-chart.component';
import { NgxsModule } from '@ngxs/store';
import { FamilyNodeState } from './store/family-node.state';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [FamilyNodesComponent, FamilyTreeChartComponent],
  imports: [
    FamilyNodesRoutingModule,
    CommonModule,
    NgxsModule.forFeature([FamilyNodeState]),
    TuiLetModule,
  ],
})
export class FamilyNodesModule {}
