import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlPage } from './gl.page';

const routes: Routes = [
  {path: '',
  redirectTo: '/gl/tabs/gl-trn',
  pathMatch: 'full'
},
   {
    path: 'tabs',
    component: GlPage,
    children: [
      {
        path: '',
        redirectTo: '/gl/tabs/gl-trn',
        pathMatch: 'full'
      },
      {
        path: 'gl-trn',
        loadChildren: () =>
          import('./gl-trn/gl-trn.module').then((m) => m.GlTrnPageModule),
      },
      {
        path: 'gl-rep',
        loadChildren: () =>
          import('./gl-rep/gl-rep.module').then((m) => m.GlRepPageModule),
      },
{
        path: 'gl-def',
        loadChildren: () =>
          import('./gl-def/gl-def.module').then((m) => m.GlDefPageModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlPageRoutingModule {}
