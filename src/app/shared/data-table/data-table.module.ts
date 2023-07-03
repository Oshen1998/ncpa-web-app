import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from 'src/app/material.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  exports: [DataTableComponent],
  imports: [CustomMaterialModule, CommonModule],
})
export class DataTableModule {}
