import { NgModule } from '@angular/core';
import {  MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimaryToolbarComponent } from 'src/app/primary-toolbar/primary-toolbar.component';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([])
    ],
 exports: [
  MatTableModule,
  MatSortModule,
   MatPaginatorModule,
   PrimaryToolbarComponent
 ],
 declarations: [PrimaryToolbarComponent]
})
export class SharedModule { }
