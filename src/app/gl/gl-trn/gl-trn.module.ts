import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlTrnPageRoutingModule } from './gl-trn-routing.module';

import { GlTrnPage } from './gl-trn.page';
import { PrimaryToolbarComponent } from '../../primary-toolbar/primary-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlTrnPageRoutingModule
  ],
  declarations: [GlTrnPage, PrimaryToolbarComponent]
})
export class GlTrnPageModule {}