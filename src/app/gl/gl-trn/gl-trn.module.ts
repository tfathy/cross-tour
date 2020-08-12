import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlTrnPageRoutingModule } from './gl-trn-routing.module';

import { GlTrnPage } from './gl-trn.page';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlTrnPageRoutingModule,
    SharedModule
  ],
  declarations: [GlTrnPage]
})
export class GlTrnPageModule {}
