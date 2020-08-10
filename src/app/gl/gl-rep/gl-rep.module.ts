import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlRepPageRoutingModule } from './gl-rep-routing.module';

import { GlRepPage } from './gl-rep.page';
import { PrimaryToolbarComponent } from 'src/app/primary-toolbar/primary-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlRepPageRoutingModule
  ],
  declarations: [GlRepPage, PrimaryToolbarComponent]
})
export class GlRepPageModule {}
