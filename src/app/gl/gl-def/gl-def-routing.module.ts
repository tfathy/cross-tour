import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlDefPage } from './gl-def.page';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GlDefPage
  },
  {
    path: 'gl-currency',
    loadChildren: () => import('./gl-currency/gl-currency.module').then( m => m.GlCurrencyPageModule), canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlDefPageRoutingModule {}
