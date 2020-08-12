import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlCurrencyPageRoutingModule } from './gl-currency-routing.module';

import { GlCurrencyPage } from './gl-currency.page';
import { PrimaryToolbarComponent } from 'src/app/primary-toolbar/primary-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlCurrencyPageRoutingModule
  ],
  declarations: [GlCurrencyPage, PrimaryToolbarComponent]
})
export class GlCurrencyPageModule {}
