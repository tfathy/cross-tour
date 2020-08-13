import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlPageRoutingModule } from './gl-routing.module';

import { GlPage } from './gl.page';
import { PrimaryToolbarComponent } from '../primary-toolbar/primary-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlPageRoutingModule
  ],
  declarations: [GlPage, PrimaryToolbarComponent]
})
export class GlPageModule {}
