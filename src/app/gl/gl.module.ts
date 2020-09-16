import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlPageRoutingModule } from './gl-routing.module';

import { GlPage } from './gl.page';

import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlPageRoutingModule,
    SharedModule
  ],
  declarations: [GlPage]
})
export class GlPageModule {}
