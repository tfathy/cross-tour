import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlRepPage } from './gl-rep.page';

const routes: Routes = [
  {
    path: '',
    component: GlRepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlRepPageRoutingModule {}
