import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeComponent } from './pages/family-tree/family-tree.component';
import { FamilyTreeRoutingModule } from './family-tree-routing.module';

@NgModule({
  declarations: [FamilyTreeComponent],
  imports: [FamilyTreeRoutingModule, CommonModule],
})
export class FamilyTreeModule {}
