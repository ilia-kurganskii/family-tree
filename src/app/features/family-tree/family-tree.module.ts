import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeComponent } from './pages/family-tree/family-tree.component';
import { FamilyTreeRoutingModule } from './family-tree-routing.module';
import { FamilyTreeChartComponent } from './components/family-tree-chart/family-tree-chart.component';

@NgModule({
  declarations: [FamilyTreeComponent, FamilyTreeChartComponent],
  imports: [FamilyTreeRoutingModule, CommonModule],
})
export class FamilyTreeModule {}
