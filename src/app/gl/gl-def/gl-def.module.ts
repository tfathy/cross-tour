import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlDefPageRoutingModule } from './gl-def-routing.module';

import { GlDefPage } from './gl-def.page';
import { SharedModule } from '../../shared/shared/shared.module';
import { PrimaryToolbarComponent } from '../../primary-toolbar/primary-toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlDefPageRoutingModule,
    SharedModule
  ],
  declarations: [GlDefPage, PrimaryToolbarComponent]
})
export class GlDefPageModule {}
