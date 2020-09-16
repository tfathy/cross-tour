import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlTrnPage } from './gl-trn.page';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GlTrnPage
  },
  {
    path: 'gl-journal-entry',
    loadChildren: () => import('./gl-journal-entry/gl-journal-entry.module').then( m => m.GlJournalEntryPageModule), canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlTrnPageRoutingModule {}
