import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlTrnPageRoutingModule } from './gl-trn-routing.module';

import { GlTrnPage } from './gl-trn.page';
import { SharedModule } from '../../shared/shared/shared.module';
import { PrimaryToolbarComponent } from '../../primary-toolbar/primary-toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlTrnPageRoutingModule,
    SharedModule
  ],
  declarations: [GlTrnPage, PrimaryToolbarComponent]
})
export class GlTrnPageModule {}
