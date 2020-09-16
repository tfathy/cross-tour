import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlPage } from './gl.page';
import { AuthGuard } from '../guard/auth.guard';

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
          import('./gl-trn/gl-trn.module').then((m) => m.GlTrnPageModule),canLoad: [AuthGuard]
      },
      {
        path: 'gl-rep',
        loadChildren: () =>
          import('./gl-rep/gl-rep.module').then((m) => m.GlRepPageModule), canLoad: [AuthGuard]
      },
{
        path: 'gl-def',
        loadChildren: () =>
          import('./gl-def/gl-def.module').then((m) => m.GlDefPageModule), canLoad: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlPageRoutingModule {}
