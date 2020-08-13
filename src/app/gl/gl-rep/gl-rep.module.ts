import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlRepPageRoutingModule } from './gl-rep-routing.module';

import { GlRepPage } from './gl-rep.page';
import { SharedModule } from '../../shared/shared/shared.module';
import { PrimaryToolbarComponent } from '../../primary-toolbar/primary-toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlRepPageRoutingModule,
    SharedModule
  ],
  declarations: [GlRepPage, PrimaryToolbarComponent]
})
export class GlRepPageModule {}
