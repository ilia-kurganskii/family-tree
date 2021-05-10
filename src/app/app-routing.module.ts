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
    path: 'tree',
    loadChildren: () =>
      import('./features/family-tree/family-tree.module').then(
        (m) => m.FamilyTreeModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
