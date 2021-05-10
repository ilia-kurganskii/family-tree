import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeComponent } from './pages/family-tree/family-tree.component';
import { FamilyTreeRoutingModule } from './family-tree-routing.module';
import { FamilyTreeChartComponent } from './components/family-tree-chart/family-tree-chart.component';
import { NgxsModule } from '@ngxs/store';
import { FamilyTreeState } from './store/family-tree.state';

@NgModule({
  declarations: [FamilyTreeComponent, FamilyTreeChartComponent],
  imports: [
    FamilyTreeRoutingModule,
    CommonModule,
    NgxsModule.forFeature([FamilyTreeState]),
  ],
})
export class FamilyTreeModule {}
