import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlDefPageRoutingModule } from './gl-def-routing.module';

import { GlDefPage } from './gl-def.page';
import { PrimaryToolbarComponent } from 'src/app/primary-toolbar/primary-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlDefPageRoutingModule
  ],
  declarations: [GlDefPage, PrimaryToolbarComponent]
})
export class GlDefPageModule {}
