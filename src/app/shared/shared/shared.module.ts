import { NgModule } from '@angular/core';
import {  MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PrimaryToolbarComponent } from '../../primary-toolbar/primary-toolbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([])
    ],
 exports: [
  MatTableModule,
  MatSortModule,
   MatPaginatorModule
 ],
 declarations: [PrimaryToolbarComponent]
})
export class SharedModule { }
