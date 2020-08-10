import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlJournalEntryPage } from './gl-journal-entry.page';

const routes: Routes = [
  {
    path: '',
    component: GlJournalEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlJournalEntryPageRoutingModule {}
