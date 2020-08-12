import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlRepPageRoutingModule } from './gl-rep-routing.module';

import { GlRepPage } from './gl-rep.page';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlRepPageRoutingModule,
    SharedModule
  ],
  declarations: [GlRepPage]
})
export class GlRepPageModule {}
