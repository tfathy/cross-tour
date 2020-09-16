import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlCurrencyPageRoutingModule } from './gl-currency-routing.module';

import { GlCurrencyPage } from './gl-currency.page';
import { SharedModule } from '../../../shared/shared/shared.module';
import { PrimaryToolbarComponent } from '../../../primary-toolbar/primary-toolbar.component';
import { GlPageModule } from '../../gl.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlCurrencyPageRoutingModule,
    SharedModule
  ],
  declarations: [GlCurrencyPage]
})
export class GlCurrencyPageModule {}
