import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlJournalEntryPageRoutingModule } from './gl-journal-entry-routing.module';

import { GlJournalEntryPage } from './gl-journal-entry.page';
import { PrimaryToolbarComponent } from 'src/app/primary-toolbar/primary-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlJournalEntryPageRoutingModule
  ],
  declarations: [GlJournalEntryPage, PrimaryToolbarComponent]
})
export class GlJournalEntryPageModule {}
