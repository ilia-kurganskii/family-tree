import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './features/auth/guards/auth.guard';
import { AuthModule } from './features/auth/auth.module';
import { LoginComponent } from './features/auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'trees',
    loadChildren: () =>
      import('./features/family-tree-list/family-tree-list.module').then(
        (m) => m.FamilyTreeListModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
