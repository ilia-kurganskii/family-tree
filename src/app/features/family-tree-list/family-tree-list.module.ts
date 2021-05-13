import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeListPageComponent } from './pages/family-tree-list-page/family-tree-list-page.component';
import { FamilyTreeTableComponent } from './components/family-tree-table/family-tree-table.component';
import { FamilyTreeListRoutingModule } from './family-tree-list-routing.module';
import { NgxsModule } from '@ngxs/store';
import { FamilyTreeState } from './store/family-tree.state';
import { FamilyTreeService } from './services/family-tree-service/family-tree.service';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  providers: [FamilyTreeService],
  declarations: [FamilyTreeListPageComponent, FamilyTreeTableComponent],
  imports: [
    CommonModule,
    FamilyTreeListRoutingModule,
    NgxsModule.forFeature([FamilyTreeState]),
    TuiButtonModule,
  ],
})
export class FamilyTreeListModule {}
