import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlCurrencyPage } from './gl-currency.page';

const routes: Routes = [
  {
    path: '',
    component: GlCurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlCurrencyPageRoutingModule {}
