import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeListPageComponent } from './pages/family-tree-list-page/family-tree-list-page.component';
import { FamilyTreeTableComponent } from './components/family-tree-table/family-tree-table.component';
import { FamilyListTreeRoutingModule } from './family-list-tree-routing.module';

@NgModule({
  declarations: [FamilyTreeListPageComponent, FamilyTreeTableComponent],
  imports: [CommonModule, FamilyListTreeRoutingModule],
})
export class FamilyTreeListModule {}
